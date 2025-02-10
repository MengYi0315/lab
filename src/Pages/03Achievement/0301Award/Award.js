import _ from "lodash";
import { useState, useEffect } from "react";
import Aos from "aos";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSchool, faGlobe } from '@fortawesome/free-solid-svg-icons';
import { Tabs, SegmentedControl, Table, Center, Input, Text } from "@mantine/core";
import { connect } from "react-redux";
import PageBanner from "../../../components/pageBanner";
import data from '../../../data/award.json';
import "../0301Award/Award.scss";

const nationalYearData = [
  { year:'2016' },
  { year:'2017' },
  { year:'2018' },
  { year:'2019' }, 
  { year:'2020' }, 
  { year:'2021' }, 
  { year:'2022' }, 
  { year:'2023' }, 
];

const nutcYearData = [
  { year:'2018' },
  { year:'2019' }, 
  { year:'2020' }, 
  { year:'2021' }, 
  { year:'2022' }, 
  { year:'2023' }, 
];

const tableList = [
  { title: '競賽名稱', key: 'competition', width: '18%' },
  { title: '競賽領域', key: 'group', width: '25%' },
  { title: '專題名稱', key: 'project', width: '19%' },
  { title: '專題組員', key: 'partner', width: '31%' },
  { title: '得獎名次', key: 'rank', width: '7%' },
];


const Award = (props) => {
  const [ type, setType ] = useState('national');
  const [ selectYear, setSelectYear ] = useState('2016');
  const [ yearData, setYearData ] = useState(nationalYearData);
  const [ searchInput, setSearchInput ] = useState('');
  const [ searchData, setSearchData ] = useState([]);
  

  useEffect(() => {
    window.scrollTo(0, 0);
    Aos.init();
  }, []);

  useEffect(() => {
    console.log('type', type);
    setYearData(type === 'national' ? nationalYearData : nutcYearData);
    
    setSelectYear(type === 'national' ? '2016' : '2018');
  }, [type]);

  useEffect(() => {
    console.log('type', type);
    const searchData = _.filter(data, (item) => {
      return (
        item.type === type && 
        // 判斷指定欄位是否有符合searchInput的內容
        _.some(["competition", "group", "project", "year", "rank", "partner"], (key) => {
          const value = item[key];
          //   判斷item[key]是不是array
          return _.isArray(value)
          ? _.some(value, (v) => v.includes(searchInput))
          : value.includes(searchInput)
        })
      );
    });

    setSearchData(searchData);
  }, [searchInput]);
  

  // console.log('data', data)
  // console.log('yearData2', yearData);
  // console.log('selectYear', selectYear);
  // console.log('search data', searchData)

  return (
    <div id="Award">
      <PageBanner 
        pathname={'award'}
      />
    
      <SegmentedControl 
        value={type}
        onChange={setType}
        radius="xs"
        transitionDuration={300}
        data={[
          { 
            value: 'national',
            label: (
              <Center className="btn">
                <FontAwesomeIcon icon={faGlobe} className="icon" />
                <span>校外</span>
              </Center>
            ), 
          },
          { 
            value: 'nutc',
            label: (
              <Center className="btn">
                <FontAwesomeIcon icon={faSchool} className="icon" />
                <span>校內</span>
              </Center>
            ), 
          },
        ]} 
        styles={{
          root: {
            backgroundColor: '#e8ecf3'
          }
        }}
        style={{
          marginBottom: '20px',
        }}
        data-aos="fade-up"
      />

      <div 
        className="search-div"
        data-aos="fade-up"
      >
        <Text 
          style={{marginRight: '10px',}}
        >
          查尋：
        </Text>
        <Input 
          value={searchInput}
          onInput={(e) => setSearchInput(e.target.value)}
        />
      </div>

      <Tabs value={selectYear} data-aos="fade-up">
        { searchInput ? (
          <></>
        ) : (
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
        )}

        <Tabs.Panel value={selectYear}>
          <Table 
            verticalSpacing={"md"}
            className="table"
            highlightOnHover
            styles={(theme) => ({
              tr: {
                transition: 'all 0.2s ease'
              }
            })}
          >
            <Table.Thead className="head">
              <Table.Tr>
                {_.map(tableList, (list) => (
                  <Table.Th key={list.key} style={{ width: list.width }}>
                    {list.title}
                  </Table.Th>
                ))}
              </Table.Tr>
            </Table.Thead>
            <Table.Tbody>
              {searchInput 
              ? searchData.length !== 0 
                ? _.map(searchData, (item) => (
                  <Table.Tr>
                    <Table.Td>
                      {item.competition}
                    </Table.Td>
                    <Table.Td>
                      {item.group}
                    </Table.Td>
                    <Table.Td>
                      {item.project}
                    </Table.Td>
                    <Table.Td>
                      {_.map(item.partner, (p) => (
                        <span>
                          {p}　
                        </span>
                      ))}
                    </Table.Td>
                    <Table.Td>
                      {item.rank}
                    </Table.Td>
                  </Table.Tr>
                ))
                : <Table.Tr>
                    <Table.Td 
                      colSpan={5}
                      style={{
                        textAlign: 'center', 
                      }}
                    >
                      查詢不到相關資料
                    </Table.Td>
                  </Table.Tr>
              : _.map(_.filter(data, {'year': selectYear, 'type': type}), (item) => (
                <Table.Tr>
                  <Table.Td>
                    {item.competition}
                  </Table.Td>
                  <Table.Td>
                    {item.group}
                  </Table.Td>
                  <Table.Td>
                    {item.project}
                  </Table.Td>
                  <Table.Td>
                    {_.map(item.partner, (p) => (
                      <span>
                        {p}　
                      </span>
                    ))}
                  </Table.Td>
                  <Table.Td>
                    {item.rank}
                  </Table.Td>
                </Table.Tr>
              ))}
            </Table.Tbody>
          </Table>
        </Tabs.Panel>
      </Tabs>
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

export default  connect(mapStateToProps, mapDispatchToProps)(Award);