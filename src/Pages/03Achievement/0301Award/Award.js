import _ from "lodash";
import { useState, useEffect } from "react";
import Aos from "aos";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSchool, faGlobe } from '@fortawesome/free-solid-svg-icons';
import { Tabs, SegmentedControl, Table, Center } from "@mantine/core";
import { connect } from "react-redux";
import PageBanner from "../../../components/pageBanner";
import data from '../../../data/award.json';
import "../0301Award/Award.scss";

const nationalYearData = [
    { year:'2016' },
    { year:'2017' },
    { year:'2018' },
    { year:'2019' }, 
    { year:'2020' }, 
    { year:'2021' }, 
    { year:'2022' }, 
    { year:'2023' }, 
];

const nutcYearData = [
    { year:'2018' },
    { year:'2019' }, 
    { year:'2020' }, 
    { year:'2021' }, 
    { year:'2022' }, 
    { year:'2023' }, 
];

const tableList = [
    { title: '競賽名稱', key: 'competition' },
    { title: '競賽領域', key: 'group' },
    { title: '專題名稱', key: 'project' },
    { title: '專題組員', key: 'partner' },
    { title: '得獎名次', key: 'rank' },
];


const Award = (props) => {
    const [ type, setType ] = useState('national');
    const [selectYear, setSelectYear] = useState('2016');
    const [yearData, setYearData] = useState(nationalYearData);

    useEffect(() => {
        window.scrollTo(0, 0);
        Aos.init();
    }, []);

    useEffect(() => {
        console.log('type', type);
        setYearData(type === 'national' ? nationalYearData : nutcYearData);
        
        setSelectYear(type === 'national' ? '2016' : '2018');
    }, [type]);


    

    console.log('data', data)
    console.log('yearData2', yearData);
    console.log('selectYear', selectYear);

    return (
        <div id="Award">
            <PageBanner 
                pathname={'award'}
            />
        
        <SegmentedControl 
            value={type}
            onChange={setType}
            radius="xs"
            transitionDuration={300}
            data={[
                { 
                    value: 'national',
                    label: (
                        <Center className="btn">
                            <FontAwesomeIcon icon={faGlobe} className="icon" />
                            <span>校外</span>
                        </Center>
                    ), 
                },
                { 
                    value: 'nutc',
                    label: (
                        <Center className="btn">
                            <FontAwesomeIcon icon={faSchool} className="icon" />
                            <span>校內</span>
                        </Center>
                    ), 
                },
            ]} 
            styles={{
                root: {
                    backgroundColor: '#e8ecf3'
                }
            }}
            style={{
                marginBottom: '20px',
            }}
            data-aos="fade-up"
        />

        <Tabs value={selectYear} data-aos="fade-up">
                <Tabs.List>
                    {_.map(yearData, (y) => (
                        <Tabs.Tab 
                            key={y.year}
                            value={y.year}
                            onClick={() => {
                                setSelectYear(y.year)
                            }}
                            styles={{
                                tab: {
                                    padding: '20px 25px',
                                    fontSize: '16px',
                                    fontWeight: '500',
                                }
                            }}
                        >
                            <span>{y.year}年</span>    
                        </Tabs.Tab>
                    ))}
                </Tabs.List>

                <Tabs.Panel value={selectYear}>
                    <Table 
                        verticalSpacing={"md"}
                        className="table"
                    >
                        <Table.Thead className="head">
                            <Table.Tr>
                                {_.map(tableList, (list) => (
                                    <Table.Th key={list.key}>
                                        {list.title}
                                    </Table.Th>
                                ))}
                            </Table.Tr>
                        </Table.Thead>
                        <Table.Tbody>
                            {_.map(_.filter(data, {'year': selectYear, 'type': type}), (item) => (
                                <Table.Tr>
                                    <Table.Td>
                                        {item.competition}
                                    </Table.Td>
                                    <Table.Td>
                                        {item.group}
                                    </Table.Td>
                                    <Table.Td>
                                        {item.project}
                                    </Table.Td>
                                    <Table.Td>
                                        {_.map(item.partner, (p) => (
                                            <span>
                                                {p}　
                                            </span>
                                        ))}
                                    </Table.Td>
                                    <Table.Td>
                                        {item.rank}
                                    </Table.Td>


                                </Table.Tr>
                            ))}
                        </Table.Tbody>
                    </Table>
                </Tabs.Panel>
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

export default  connect(mapStateToProps, mapDispatchToProps)(Award);