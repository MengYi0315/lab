import { Flex, Image, Grid, Title, Stack, Text, Center } from "@mantine/core";
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

export default Professor;