import { Input, Button, Center, Image, Space, Stack, Card } from "@mantine/core";
import "../Auth/Login.scss";
import logo from "../../assets/logo.png";


const Login = (props) => {
    return (
        <div id="Login">
            <Center>
                <Image 
                    src={logo}
                    h={100}
                    w="auto"
                    className="logo"
                />

            </Center>
            <Center>
            <Card
                shadow="sm"
                padding={"lg"}
                radius={"md"}
                withBorder
                style={{width:'50%', marginTop:'10px'}}
            >
                {/* <Card.Section>
                    
                </Card.Section> */}
                <Space h="xl" />
                
                <Stack
                    align="center"
                    justify="flex-start"
                    gap={"md"}
                >
                    <Input
                        placeholder="enter account..."
                        style={{width:'50%'}}
                    />
                    <Input
                        placeholder="enter password..."
                        style={{width:'50%'}}
                    />
                    <Button size="md" mt="md" radius="md" style={{width:'50%'}}>
                        Login
                    </Button>
                </Stack>
                

            </Card>
            </Center>

            
        </div>
    )
}

export default Login;