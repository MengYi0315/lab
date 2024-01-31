import { Flex, Image, Grid, Title, Stack, Text, Center } from "@mantine/core";
import { connect } from "react-redux";
import "../02Professor/Professor.scss";

const Professor = (props) => {
    return (
        <div id="Professor">
            <Title className="title">Professor</Title>

            <Center>
                <Flex>
                    <Image
                        src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-10.png"
                        w={400}
                    />
                    <Stack style={{marginLeft:'50px'}}>
                        <Title order={3}>姜琇森</Title>
                        <Title order={4}>Chiang Hsiu-sen </Title>
                        <Text>專長及研究領域：資料探勘、數據分析、統計與計量方法、派翠網路、生物醫療、訊號處理</Text>
                        <Text>辦公室：臺中科技大學 宏業樓 6405室</Text>
                        <Text>專題研究室：台中科技大學 資訊樓 2602室</Text>
                        <Text>分機：(04)2219-6882</Text>
                        <Text>信箱：hschiang@nutc.edu.tw</Text>
                    </Stack>
                </Flex>

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

export default  connect(mapStateToProps, mapDispatchToProps)(Professor);