import { useState, useEffect, useRef } from "react";
import _ from "lodash";
import { Flex, Image, Grid, Title, Stack, Text, Center, Transition } from "@mantine/core";
import { connect } from "react-redux";
import Aos from "aos";
import PageBanner from "../../components/pageBanner";
import teacherImg from '../../assets/professor.png';
import "../02Professor/Professor.scss";

import professorData from "../../data/professor.json";

const Professor = (props) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const lineRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    Aos.init();

    const handleScroll = () => {
      if (lineRef.current) {
        const lineTop = lineRef.current.getBoundingClientRect().top;
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
              boxShadow: '-20px 20px 0px #e8ecf3'
            }}
          />
        </Grid.Col>
        <Grid.Col span={8}>
          <Stack justify="flex-start" className="text-div ml-20">
            <div>
              <div>
                <span className="ch">姜琇森</span>
                <span className="en ml-20">Chiang Hsiu-sen</span>
              </div>
              <div ref={lineRef} className="line mt-12 mb-12"></div>
            </div>
            <Stack 
              justify="space-between"
              style={{
                height: isExpanded ? 'calc(100% - 112px)' : '0px',
                transition: 'height 0.5s ease-in-out', 
                overflow: 'hidden',
              }}
            >
              {_.map(professorData, (item) => (
                <div className="text_item">
                  <span className="title ml-10">{item.title}：</span>
                  <span className="text ml-30">{item.value}</span>
                </div>
              ))}
            </Stack>
          </Stack>
        </Grid.Col>
      </Grid>
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