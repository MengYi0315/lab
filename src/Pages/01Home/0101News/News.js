/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/alt-text */
import _ from 'lodash';
import { useState, useEffect } from 'react';
import { connect } from 'react-redux';
// import { Carousel } from '@mantine/carousel';
// import { Flex, Grid, Space, Text, Pagination, Center } from '@mantine/core';
import "../0101News/News.scss";

const news = [
    {id: "1", title:"1. this is a news...", content:"1. this is content...", date:"2024/01/01"}, 
    {id: "2", title:"2. this is a news...", content:"2. this is content...", date:"2024/01/02"}, 
    {id: "3", title:"3. this is a news...", content:"3. this is content...", date:"2024/01/03"}, 
    {id: "4", title:"4. this is a news...", content:"4. this is content...", date:"2024/01/04"}, 
    {id: "5", title:"5. this is a news...", content:"5. this is content...", date:"2024/01/05"}, 
    {id: "6", title:"6. this is a news...", content:"6. this is content...", date:"2024/01/06"}, 
    {id: "7", title:"7. this is a news...", content:"7. this is content...", date:"2024/01/07"}, 
    {id: "8", title:"8. this is a news...", content:"8. this is content...", date:"2024/01/08"}, 

];

const News = (props) => {
    const searchId = _.last(_.split(window.location.pathname, '/'));
    const searchNews = _.filter(news, ['id', searchId]);
    console.log('id', searchId)
    console.log('search news', searchNews)

    useEffect(() => {
    }, []);
    // console.log(props);

    // const newsData = _.map(news, (initialNews) => ({
    //     ...initialNews, 
    //     dateArr: _.split(initialNews.date, '/'), 
    //     // year: dateArr[0], 
    //     // month: dateArr[1], 
    //     // day: dateArr[2], 
    // }));
    // console.log('test', newsData)

    return (
        <div id="News">      
            {_.map(searchNews, (news) => (
                <div>
                    <div>
                        title: {news.title}
                    </div>
                    <div>
                        content: {news.content}
                    </div>
                    <div>
                        date: {news.date}
                    </div>
                </div>
            ))}
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