import _ from "lodash";
import { useState, useEffect } from "react";
import { Title, Card, Flex, Image, Stack, Text, Tabs } from "@mantine/core";
import { connect } from "react-redux";
import Aos from "aos";
import PageBanner from "../../../components/pageBanner";
import data from '../../../data/topic.json';
import "../0302Topic/Topic.scss";

const yearData = [
    {yearNumber:'107', year:'107年'},
    {yearNumber:'108', year:'108年'}, 
    {yearNumber:'109', year:'109年'}, 
    {yearNumber:'110', year:'110年'}, 
    {yearNumber:'111', year:'111年'}, 
    {yearNumber:'112', year:'112年'}, 
];

const Topic = (props) => {
    useEffect(() => {
        window.scrollTo(0, 0);
        Aos.init();
    }, []);


    const [selectYear, setSelectYear] = useState('107');

    console.log('select year', selectYear);
    console.log('select year data', _.filter(data, {'year': selectYear}));
    return (
        <div id="Topic">
            <PageBanner 
                pathname={window.location.pathname}
            />
            
            <Tabs defaultValue="107" data-aos="fade-up">
                <Tabs.List>
                    {_.map(yearData, (data) => (
                        <Tabs.Tab 
                            key={data.yearNumber}
                            value={data.yearNumber}
                            onClick={() => {
                                setSelectYear(data.yearNumber)
                            }}
                        >
                            <Text fw={500}>{data.year}</Text>    
                        </Tabs.Tab>
                    ))}
                </Tabs.List>

                {_.map(_.filter(data, {'year': selectYear}), (item) => (
                    <Tabs.Panel value={selectYear}>
                        <Card
                            shadow="sm"
                            padding="lg" 
                            radius="md" 
                            withBorder
                            style={{margin:'20px 0'}}
                        >
                            <Flex 
                            
                            >
                                <Image
                                    src={item.photo}
                                    w={500}
                                    h={500}
                                    style={{margin:'0 20px'}}

                                />
                                <Stack
                                    align="flex-start"
                                    justify="flex-start"
                                    style={{margin:'0 20px', width:'100%'}}
                                >
                                    <Title order={3}>{item.title}</Title>
                                    <Text c='dimmed'>
                                        {_.map(item.partner, (partner) => (
                                            partner + "　"
                                        ))}
                                    </Text>
                                    <Text style={{textAlign:'justify'}}>
                                        {_.map(item.introduction, (item) => (
                                            <>
                                                　　{item}<br />
                                            </>
                                            
                                        ))}
                                        {/* {item.introduction} */}
                                    </Text>
                                </Stack>
                            </Flex>
                        </Card>
                    </Tabs.Panel>
                ))}
                
            </Tabs>
            
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        // Example
        // GetTestData: _.get(state, "Lab01.TestData", []), 
        // 存在props裡的名稱: _.get(state, "reducer名稱.對應的type存payload的變數", [])
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        // Example
        // GET_TestData(payload, callback, loading) {
        //     dispatch({type: "GET_TestData", payload, callback, loading});
        // }, 
        // 存在props裡的function名稱，可自行取，通常會跟下面的type名稱一樣(payload, callback, loading) {
        //     dispatch({type: " saga的takeLatest內對應的變數，在" "裡面 ", payload, callback, loading});
        // },
    };
};

export default  connect(mapStateToProps, mapDispatchToProps)(Topic);