import _ from "lodash";
import { useEffect, useState } from "react";
import { 
    Card,
    Image, 
    Text, 
    Pagination, 
    Center,
    Modal 
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { connect } from "react-redux";
import Aos from "aos";
import PageBanner from "../../components/pageBanner";
import activityData from "../../data/activity.json";
import "../04Activity/Activity.scss";



const Activity = (props) => {
    //Page相關
    const [activePage, setActivePage] = useState(1);
    const itemsPage = 12;
    const maxPage = _.ceil(activityData.length / itemsPage);
    const paginatedData = _.chunk(activityData, itemsPage);
    //modal
    const [opened, { open, close }] = useDisclosure(false);
    console.log(window)

    const setPage = (page) => {
        setActivePage(page);
    };

    useEffect(() => {
        window.scrollTo(0, 0);
        Aos.init();
    }, []);

    useEffect(() => {
        console.log(window.innerWidth)
    }, [window.innerWidth])

    return (
        <div id="Activity">
            <PageBanner 
                pathname={window.location.pathname}
            />
            {/* <Modal 
                
                opened={opened} 
                onClose={close} 
                title="Activity" 
                centered
            >
                <Image
                    src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png"
                />
                123456
            </Modal> */}
            
            <div className="activity-div" data-aos="fade-up">
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
                            className="photo-div"
                        >
                            <Card.Section>
                                <Image
                                    src={data.photo}
                                    height={200}
                                />
                            </Card.Section>

                            <text className="title mt-16">{data.title}</text>
                            <text className="date">{data.date}</text>
                            <text className="content mt-16">{data.content}</text>
                        
                        </Card>
                    </>
                ))}

            </div>

            <Center className="mt-20" data-aos="fade-up">
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