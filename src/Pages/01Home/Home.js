import _ from 'lodash';
import { useState } from 'react';
import { Carousel } from '@mantine/carousel';
import { Flex, Grid, Space, Text, Pagination, Center } from '@mantine/core';
import "../01Home/Home.scss";

import carousel1 from "../../assets/carousel/1.png";
import carousel2 from "../../assets/carousel/2.png";
import carousel3 from "../../assets/carousel/3.png";
// import carousel4 from "../../assets/carousel/4.png";

const Home = (props) => {
    const news = [
        {title:"this is a news...", content:"this is content...", date:"2024/01/01"}, 
        {title:"this is a news...", content:"this is content...", date:"2024/01/01"}, 
        {title:"this is a news...", content:"this is content...", date:"2024/01/01"}, 
        {title:"this is a news...", content:"this is content...", date:"2024/01/01"}, 
        {title:"this is a news...", content:"this is content...", date:"2024/01/01"}, 
        {title:"this is a news...", content:"this is content...", date:"2024/01/01"}, 
        {title:"this is a news...", content:"this is content...", date:"2024/01/01"}, 
        {title:"this is a news...", content:"this is content...", date:"2024/01/01"}, 

    ];

    const { newsdata, carouseldata } = props;
    const [activePage, setActivitePage] = useState(1);
    const itemPage = 5;
    const maxPage = _.ceil(news.length / itemPage);
    const paginatedData = _.chunk(news, itemPage);
    
    const setPage = (page) => {
        setActivitePage(page);
    };
    console.log('page data', paginatedData)
    return (
        <div id="Home">        
            <Carousel
                className='carousel'
                align={'start'}
                draggable
                height={600}
                slideGap="md"
                withIndicators
            >
                <Carousel.Slide>
                    <img src={carousel1} style={{width:'100%'}}></img>
                </Carousel.Slide>
                <Carousel.Slide>
                    <img src={carousel2} style={{width:'100%'}}></img>
                </Carousel.Slide>
                <Carousel.Slide>
                    <img src={carousel3} style={{width:'100%'}}></img>
                </Carousel.Slide>
            </Carousel>
            <Space h='md' />
            <Flex
                gap={'md'}
                justify={'start'}
                align={'center'}
                direction={'column'}
                style={{width:'100%'}}
            >
                {_.map(paginatedData[activePage - 1], (news, index) => (
                    <Grid gutter={'md'} style={{width:'100%'}} key={index}>
                        <Grid.Col span={10}>
                            <Text fw={500}>
                                {news.title}
                            </Text>
                        </Grid.Col>
                        <Grid.Col span={2}>
                            <Text ta={'right'}>
                                {news.date}
                            </Text>
                        </Grid.Col>
                    </Grid>                    
                ))}
            </Flex>
            <Center>
                <Pagination total={maxPage} value={activePage} onChange={setPage} siblings={1} />
            </Center>
        </div>
    )
}

export default Home;