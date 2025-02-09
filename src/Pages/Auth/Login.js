import { useState, useEffect } from "react";
import { connect } from "react-redux";

import { TextInput, Button, Image, Space, Stack, Card, Title } from "@mantine/core";
import Aos from "aos";
import "../Auth/Login.scss";
import logo from "../../assets/logo.png";
import loginBackground from '../../assets/login_bg.jpg';
import '../../mixin/animista.scss';



const Login = (props) => {
  const [loaded, setLoaded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    Aos.init();
    const background = new window.Image(); 
    background.src = loginBackground;
    background.onload = () => setLoaded(true);
    console.log(background)

  }, []);


  return (
    <div id="Login">
      <div 
        className="kenburns-top"
        style={{
          backgroundImage: loaded ? `url(${loginBackground})` : 'none', 
          transition: 'background-image 0.5s ease-in-out', 
          backgroundSize: 'cover',
          height: '100%', 
          width: '100%', 
          position: 'absolute', 
          zIndex: '1',
        }}
      >
      </div>
      <div className="main_div">
        <div 
          className="login_div" 
          data-aos="fade-up" 
          data-aos-duration="800" 
          data-aos-delay="300"
        >
          <Card
            shadow="sm"
            padding={"lg"}
            radius={"md"}
            style={{
              width:'40%', 
              padding: '60px 100px', 
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}      
          >
            <Title 
              order={2} 
              className="shadow"
              styles={{
                root: {
                  color: '#041827',
                }
              }}
            >
              成員登入
            </Title>
            <Space h="xl" />

            <Stack
              align="center"
              justify="flex-start"
              gap={"md"}
            >
              <TextInput
                label="帳號"
                placeholder="請輸入帳號..."
                className="shadow"
                styles={{
                  input: {
                    backgroundColor: '#ffffff94',
                    boxShadow: isHovered ? '2px 2px 5px #babdbe': 'none',
                    transition: 'box-shadow 0.8s ease',
                  },
                  label: {
                    fontSize: '18px',
                    color: '#041827',
                  }
                }}
                style={{
                  width:'70%', 
                  textAlign: 'start', 
                }}
              />
              <TextInput
                label="密碼"
                placeholder="請輸入密碼..."
                className="shadow"
                styles={{
                  input: {
                    backgroundColor: '#ffffff94',
                    boxShadow: isHovered ? '2px 2px 5px #babdbe': 'none',
                    transition: 'box-shadow 0.8s ease',
                  },
                  label: {
                    fontSize: '18px', 
                    color: '#041827',
                  }
                }}
                style={{
                  width:'70%', 
                  textAlign: 'start', 
                }}
              />
              <Button 
                size="md" 
                mt="xl"
                variant="filled" 
                className="login_btn"
                // radius="md" 
                style={{
                  width:'70%', 
                }}
              >
                登入
              </Button>
            </Stack>

            

          </Card>

        </div>
      </div>

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