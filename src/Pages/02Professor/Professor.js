import { Flex, Image, Grid, Title } from "@mantine/core";
import "../02Professor/Professor.scss";

const Professor = (props) => {
    return (
        <div id="Professor">
            <Title className="title">Professor</Title>

            <Flex>
                <Image
                    src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-10.png"
                />
                <Flex></Flex>
            </Flex>
        </div>
    )
}

export default Professor;