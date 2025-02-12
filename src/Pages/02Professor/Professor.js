import { useState, useEffect, useRef } from "react";
import _ from "lodash";
import { Flex, Image, Grid, Title, Stack, Text, Center, Transition } from "@mantine/core";
import { connect } from "react-redux";
import Aos from "aos";
import PageBanner from "../../components/pageBanner";
import teacherImg from '../../assets/professor.png';
import "../02Professor/Professor.scss";

const Professor = (props) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const lineRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    Aos.init();

    const handleScroll = () => {
      if (lineRef.current) {
        const lineTop = lineRef.current.getBoundingClientRect().top;
        console.log(lineTop)
        if (lineTop <= 474) {
          setIsExpanded(true);
        } else {
          setIsExpanded(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  console.log(isExpanded)

  return (
    <div id="Professor">
      <PageBanner
        pathname={'professor'}
      />

      <Grid className="introduction-div" data-aos="fade-up">
        <Grid.Col span={4}>
          <Image
            src={teacherImg}
            w='100%'
            h={500}
            style={{ 
              boxShadow: '-20px 20px 0px #edf6ff'
            }}
          />
        </Grid.Col>
        <Grid.Col span={8}>
          <Stack justify="space-between" className="text-div ml-20">
            <div>
              <div>
                <span className="ch">姜琇森</span>
                <span className="en ml-20">Chiang Hsiu-sen</span>
              </div>
              <div ref={lineRef} className="line mt-12"></div>
            </div>
            <Stack 
              justify="space-between"
              style={{
                height: isExpanded ? '400px' : '0px',
                transition: 'height 0.5s ease-in-out', 
                overflow: 'hidden',
              }}
              // className={`text_item ${isExpanded ? "expanded" : ""}`} 
            >
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span className="title ml-10">專長及研究領域：</span>
                <span className="text ml-20">機器學習、資料科學、自然語言處理、大型語言模型、專家系統、智慧交通、智慧醫療資訊、軟體智慧化、AI加值應用</span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span className="title ml-10">辦公室：</span>
                <span className="text ml-20">臺中科技大學 弘業樓 6405室</span>
              </div>                        
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span className="title ml-10">專題研究室：</span>
                <span className="text ml-20">台中科技大學 資訊樓 2602室</span>
              </div>                        
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span className="title ml-10">分機：</span>
                <span className="text ml-20">(04)2219-6882</span>
              </div>                        
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span className="title ml-10">信箱：</span>
                <span className="text ml-20">hschiang@nutc.edu.tw</span>
              </div>
            </Stack>
          </Stack>
        </Grid.Col>
      </Grid>

      {/* <Center>
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

      </Center> */}
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