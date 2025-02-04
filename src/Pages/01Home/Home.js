/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/alt-text */
import _ from 'lodash';
import moment from 'moment';
import { Link, NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Aos from 'aos';
import { Carousel, CarouselSlide } from '@mantine/carousel';
import { Flex, Space, Text, Pagination, Center } from '@mantine/core';
import "../01Home/Home.scss";
import news from '../../data/news.json';
import carousel1 from "../../assets/carousel/1.png";
import carousel2 from "../../assets/carousel/2.png";
import carousel3 from "../../assets/carousel/3.png";
import { connect } from 'react-redux';

const Home = (props) => {
  const [activePage, setActivitePage] = useState(1);    
  const newsData = _.map(news, (initialNews) => ({
      ...initialNews, 
      year: moment(initialNews.date).format('YYYY'), 
      month: moment(initialNews.date).format('MM'), 
      day: moment(initialNews.date).format('DD'), 
  }));
  console.log('test', newsData)
  console.log(window.location.pathname, '123')

  const itemPage = 5;
  const maxPage = _.ceil(newsData.length / itemPage);
  const paginatedData = _.chunk(newsData, itemPage);
  
  const setPage = (page) => {
      setActivitePage(page);
  };
  // console.log('page data', paginatedData)

  useEffect(() => {
      window.scrollTo(0, 0);
      Aos.init();
  }, []);
  console.log(props);

  
  

  return (
    <div id="Home">        
      <Carousel
          className='carousel'
          align={'start'}
          draggable
          // height={600}
          slideGap="md"
          withIndicators
      >
          {/* <Carousel.Slide>

          </Carousel.Slide> */}
          <Carousel.Slide>
              <img src={carousel1} className='carouselImg'></img>
          </Carousel.Slide>
          <Carousel.Slide>
              <img src={carousel2} className='carouselImg'></img>
          </Carousel.Slide>
          <Carousel.Slide>
              <img src={carousel3} className='carouselImg'></img>
          </Carousel.Slide>
      </Carousel>

      <div className='title' data-aos="fade-right">
          <span>最新消息</span>
          <span className='en-title'>News</span>
      </div>
      <Flex
        // gap={'md'}
        justify={'start'}
        align={'center'}
        direction={'column'}
        style={{ 
          width:'80vw', 
        }}
        data-aos="fade-up"
        data-aos-offset="250"
      >
        {_.map(paginatedData[activePage - 1], (news, index) => (
          <Link to={`/news/${news.id}`} className="link">
            <div className='news-item'>
              <div className='date-div'>
                <div className='year'>
                  {news.year}
                </div>
                <div className='date'>
                  {news.month}.{news.day}
                </div>
              </div>
              <div className='text-div'>
                {news.title}
              </div>
            </div>
          </Link>
        ))}
          <Pagination 
            total={maxPage} 
            value={activePage} 
            onChange={setPage} 
            siblings={1} 
            styles={{
              control: {
                borderRadius: '0px',
                padding: '0px',
                marginTop: '20px',
              },
            }}
          />
      </Flex>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    // GetTestData: _.get(state, "Lab01.TestData", []), 
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    // GET_TestData(payload, callback, loading) {
    //   dispatch({type: "GET_TestData", payload, callback, loading});
    // }, 
  };
};

export default  connect(mapStateToProps, mapDispatchToProps)(Home);