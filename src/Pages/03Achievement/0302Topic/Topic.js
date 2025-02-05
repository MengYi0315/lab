import _ from "lodash";
import { useState, useEffect } from "react";
import { Card, Image, Tabs, Text, Button } from "@mantine/core";
import { useDisclosure } from '@mantine/hooks';
import { connect } from "react-redux";
import Aos from "aos";
import PageBanner from "../../../components/pageBanner";
import TopicModal from "../../../components/topicModal";
import data from '../../../data/topic.json';
import "../0302Topic/Topic.scss";

const yearData = [
  { year:'2018' },
  { year:'2019' }, 
  { year:'2020' }, 
  { year:'2021' }, 
  { year:'2022' }, 
  { year:'2023' }, 
];

const Topic = (props) => {
  const [selectYear, setSelectYear] = useState('2018');
  const [modalData, setModalData] = useState({});
  const [opened, { open, close }] = useDisclosure(false);

  const getModalData = (id) => {
    const selectModalData = _.find(data, { 'id': id });
    setModalData(selectModalData);
  };
  useEffect(() => {
    window.scrollTo(0, 0);
    Aos.init();
  }, []);

  return (
    <div id="Topic">
      <PageBanner 
        pathname={'topic'}
      />
        
      <Tabs defaultValue="2018" data-aos="fade-up">
          <Tabs.List>
            {_.map(yearData, (y) => (
              <Tabs.Tab 
                key={y.year}
                value={y.year}
                onClick={() => {
                  setSelectYear(y.year)
                }}
                styles={{
                  tab: {
                    padding: '20px 25px',
                    fontSize: '16px',
                    fontWeight: '500',
                  }
                }}
              >
                <span>{y.year}年</span>    
              </Tabs.Tab>
            ))}
          </Tabs.List>

          {_.map(_.filter(data, {'year': selectYear}), (item) => (
            <Tabs.Panel value={selectYear}>
              <Card
                shadow="sm"
                padding="xl" 
                radius="md" 
                withBorder
                styles={{
                  root: {
                    borderRadius: '0px', 
                    borderTop: '2px solid #ccd2df',
                    borderBottom: '2px solid #ccd2df',
                    borderRight: '0px', 
                    borderLeft: '0px', 
                    boxShadow: '0px 1px 8px 0px #ccd2df',
                  }
                }}
                style={{
                  margin:'30px 0',
                }}
              >
                <div className="content-div">
                  <div 
                    style={{
                      display: 'flex', 
                      alignItems: 'flex-start',
                    }}
                  >
                    <Image
                      src={item.photo}
                      alt={`${item.title} photo`}
                      w={500}
                      h={500}
                    />
                  </div>

                  <div className="text-div">
                    <div>
                      <div className="title-div">
                        <span className="title">{item.title}</span>
                        <span className="year">{item.year}年</span>
                      </div>
                      <div className="partner-div">
                        {_.map(item.partner, (partner) => (
                          <span className="partner">
                            {partner}
                          </span>
                        ))}
                      </div>
                      <Text
                        lineClamp={12}
                        className="text"
                      >
                        {item.introduction}
                      </Text>
                    </div>
                    <div 
                      style={{
                        width: '100%',
                        display: 'flex', 
                        justifyContent: 'end', 
                        alignItems: 'end'
                      }}
                    >
                      <Button
                        // variant="default"
                        className="link"
                        styles={{
                          root: {
                            height: '50px', 
                            width: '150px'
                          }
                        }}
                        onClick={() => {
                          open();
                          getModalData(item.id);
                        }}
                      >
                        查看更多...
                      </Button>
                    </div>
                  </div>
                </div>  
              </Card>
            </Tabs.Panel>
          ))}
      </Tabs>
      <TopicModal 
        opened={opened}
        open={open}
        close={close}
        modalData={modalData}
      />
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

export default  connect(mapStateToProps, mapDispatchToProps)(Topic);