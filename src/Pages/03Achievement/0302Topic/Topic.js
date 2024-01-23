import _ from "lodash";
import { Title, Card, Flex, Image, Stack, Text } from "@mantine/core";
import "../0302Topic/Topic.scss";

const Topic = (props) => {
    const data = [

    ];

    return (
        <div id="Topic">
            <Title className="title">Topic</Title>
            <Card
                shadow="sm"
                padding="lg" 
                radius="md" 
                withBorder
                // style={{width:'50%'}}
            >
                <Flex style={{width:'50%'}}>
                    <Image
                        src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png"
                        w={500}
                    />
                    <Stack
                        align="flex-start"
                        justify="flex-start"
                    >
                        <Text>123</Text>
                        <Text>123</Text>
                        <Text>123</Text>
                    </Stack>
                </Flex>
            </Card>
        </div>
    )
}

export default Topic;