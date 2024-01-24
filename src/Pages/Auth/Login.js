import { Input, Button, Center, Image, Space, Stack, Card, Text, Title } from "@mantine/core";
import "../Auth/Login.scss";
import logo from "../../assets/logo.png";
import { useState } from "react";


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
                style={{width:'40%', marginTop:'10px'}}
            >
                <Space h="xl" />
                <Title order={2}>成員登入</Title>
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