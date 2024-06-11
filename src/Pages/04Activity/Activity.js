import _ from "lodash";
import { useEffect, useState } from "react";
import { 
    Card,
    Flex, 
    Image, 
    Title, 
    Text, 
    Pagination, 
    Center,
    Modal 
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { connect } from "react-redux";
import PageBanner from "../../components/pageBanner";
import "../04Activity/Activity.scss";



const Activity = (props) => {
    const data = [
        {title:"1", photo:["a", "b", "c"]},
        {title:"2", photo:["a", "b", "c"]},
        {title:"3", photo:["a", "b", "c"]},
        {title:"4", photo:["a", "b", "c"]},
        {title:"5", photo:["a", "b", "c"]},
        {title:"6", photo:["a", "b", "c"]},
        {title:"7", photo:["a", "b", "c"]},
        {title:"8", photo:["a", "b", "c"]},
        {title:"9", photo:["a", "b", "c"]},
        {title:"10", photo:["a", "b", "c"]},
        {title:"12", photo:["a", "b", "c"]},
        {title:"12", photo:["a", "b", "c"]},
        {title:"13", photo:["a", "b", "c"]},
        {title:"14", photo:["a", "b", "c"]},
        {title:"15", photo:["a", "b", "c"]},
        {title:"16", photo:["a", "b", "c"]},
        {title:"17", photo:["a", "b", "c"]},
        {title:"18", photo:["a", "b", "c"]},

    ];

    //Page相關
    const [activePage, setActivitePage] = useState(1);
    const itemsPage = 12;
    const maxPage = _.ceil(data.length / itemsPage);
    const paginatedData = _.chunk(data, itemsPage);
    //modal
    const [opened, { open, close }] = useDisclosure(false);

    const setPage = (page) => {
        setActivitePage(page);
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    


    return (
        <div id="Activity">
            <PageBanner 
                pathname={window.location.pathname}
            />
            <Modal 
                
                opened={opened} 
                onClose={close} 
                title="Activity" 
                centered
                            
            >
                <Image
                    src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png"
                />
                123456
            </Modal>
            
            <Flex
                justify={"flex-start"}
                wrap={"wrap"}
                style={{marginBottom:'10px'}}
            >
                {_.map(paginatedData[activePage - 1], (data, index)=> (
                    <>
                        {/* <Modal 
                            key={index} 
                            opened={opened} 
                            onClose={close} 
                            title="Activity" 
                            centered
                            
                        >
                            <Image
                                src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png"
                                
                            />
                        </Modal> */}
                        <Card 
                            key={index} 
                            shadow="sm" 
                            padding="lg" 
                            radius="md" 
                            withBorder 
                            onClick={open}
                            className="photoDiv"
                        >
                            <Card.Section>
                                <Image
                                    src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png"
                                    height={200}
                                />
                            </Card.Section>
                            <Text fw={500} size="lg" mt="md">
                                {data.title}
                            </Text>
                            <Text mt="xs" c="dimmed" size="sm">
                                this is a activity and i don't know to talk about...more more more more
                            </Text>
                        </Card>

                    </>
                ))}
            </Flex>
            <Center>
                <Pagination total={maxPage} value={activePage} onChange={setPage} siblings={1} />
            </Center>
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

export default  connect(mapStateToProps, mapDispatchToProps)(Activity);