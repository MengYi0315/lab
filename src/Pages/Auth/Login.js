import { Input, Button, Center, Image, Space, Stack, Card, Text, Title } from "@mantine/core";
import { connect } from "react-redux";
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

export default  connect(mapStateToProps, mapDispatchToProps)(Login);