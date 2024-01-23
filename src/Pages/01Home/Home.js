import _ from 'lodash';
import { Carousel } from '@mantine/carousel';
import { Flex, Grid, Space, Text } from '@mantine/core';
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
    ];

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
                {_.map(news, (news) => (
                    <Grid gutter={'md'} style={{width:'100%'}}>
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
        </div>
    )
}

export default Home;