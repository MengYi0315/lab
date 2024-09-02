/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/alt-text */
import _ from 'lodash';
import { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import Aos from 'aos';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faNewspaper, faList } from '@fortawesome/free-solid-svg-icons';
import PageBanner from '../../../components/pageBanner';
// import { Carousel } from '@mantine/carousel';
// import { Flex, Grid, Space, Text, Pagination, Center } from '@mantine/core';
import news from '../../../data/news.json';
import "../0101News/News.scss";


const News = (props) => {
    console.log('news', news)
    // const searchId = _.last(_.split(window.location.pathname, '/'));
    // const searchNews = _.filter(news, ['id', searchId]);
    // console.log(window.location.pathname.match(/^\/[^/]+\/[^/]+/)[0])
    const { id } = useParams();
    const searchNews = _.filter(news, ['id', id]);
    console.log('id', id)
    console.log('search news', searchNews)

    useEffect(() => {
        window.scrollTo(0, 0);
        Aos.init();
    }, []);

    return (
        <div id="News">    
            <PageBanner
                pathname={'news'}
            />


            {_.map(searchNews, (news) => (
                <div>
                    <div className='title-div'>
                        <div className='title'>
                            <FontAwesomeIcon icon={faNewspaper} className='icon' />
                            {news.title}
                        </div>
                        <div className='date'>
                            發佈日期：{news.date}
                        </div>
                    </div>
                    <div className='content-div'>
                        　　{news.content}
                    </div>
                </div>
            ))}

            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <Link to='/home' className='link'>
                    <FontAwesomeIcon icon={faList} className='icon' />
                    回列表
                </Link>
            </div>

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
        //     dispatch({type: "GET_TestData", payload, callback, loading});
        // }, 
    };
};

export default  connect(mapStateToProps, mapDispatchToProps)(News);