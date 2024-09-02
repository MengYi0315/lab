/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import _ from 'lodash';
import { Link } from "react-router-dom";
import { Image } from '@mantine/core';
import professorImg from '../../assets/banner/professor.jpg';
import awardImg from '../../assets/banner/award.jpg';
import topicImg from '../../assets/banner/topic.jpg';
import activityImg from '../../assets/banner/activity.jpg';
import newsImg from '../../assets/banner/news.jpg';
import './index.scss';
import '../../mixin/animista.scss';

const allBannerData = [
    {
        path: 'professor', 
        title: '教授介紹', 
        enTitle: 'Professor', 
        img: professorImg,
    },
    {
        path: 'award', 
        title: '歷屆榮耀', 
        enTitle: 'Award', 
        img: awardImg,
    },
    {
        path: 'topic', 
        title: '專題作品', 
        enTitle: 'Topic', 
        img: topicImg,
    },
    {
        path: 'activity', 
        title: '活動紀錄', 
        enTitle: 'Activity', 
        img: activityImg,
    },
    {
        path: 'news', 
        title: '最新消息', 
        enTitle: 'News', 
        img: newsImg,
    },
];

const PageBanner = (props) => {
    console.log('banner props',props)

    const bannerData = _.find(allBannerData, { 'path': props.pathname })
    // console.log('bannerData', bannerData)

    return (
        <div id="pageBanner">
            <Image 
                src={bannerData.img}
                w='100%'
                h='100%'
                alt='122'
                className='banner-img kenburns-top'
            />
            <div className='banner-title slide-top'>
                <div className='ch-text'>{bannerData.title}</div>
                <div className='en-text'>{bannerData.enTitle}</div>
            </div>
        </div>
    );
};

export default PageBanner;