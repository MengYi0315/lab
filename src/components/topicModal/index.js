/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import _ from 'lodash';
import { Modal, Image, Accordion, ScrollArea, Text } from '@mantine/core';
import './index.scss';
import '../../mixin/animista.scss';
import undefindImg from '../../assets/undefinded.svg';

const TopicModal = (props) => {
  // console.log('topic modal props',props);
  const [processedModalData, setProcessedModalData] = useState([]);
  const { opened, open, close } = props; // * mantine hook api
  const { modalData } = props;

  useEffect(() => {
    const videoId = modalData?.youtube && modalData.youtube !== "null" 
      ?   _.get(modalData.youtube.match(/v=([^&]+)/), "[1]", "")
      : 'null';

    const initialModalData = {
      ...modalData, 
      youtubeURL: videoId !== 'null' ? `https://www.youtube.com/embed/${videoId}` : 'null', 
    };
    // console.log(initialModalData)
    setProcessedModalData(initialModalData);
  }, [modalData]);

  return (
    <Modal 
      id="topicModal"
      opened={opened} 
      onClose={close} 
      size={'70%'}
      title={modalData.title}
      styles={{
        title: {
          fontWeight: 'bold',
          color: '#155484',
          fontSize: '25px',
        }, 
        content: {
          height: '100vh',
        },
        body: {
          height: '90%'
        }
      }}
    >
      <div id='partner_div'>
        {_.map(processedModalData.partner, (item) => (
          <div className='name_div'>
            {item}
          </div>
        ))}
      </div>
      <div id='topic_div' className='mt-20'>
          <div>
            <Image
              radius={'0px'}
              src={processedModalData.photo}
              w={400}
              h={400}
            />
          </div>
          <div className='content_div ml-20'>
            <Accordion 
              styles={{
                root: {
                  height: '100%',
                },
                control: {
                  height: '50px',
                },
                label: {
                  fontWeight: 'bold',
                  height: '100%',
                }
              }}  
            >
              <Accordion.Item key={'introduction'} value={'introduction'}>
                <Accordion.Control>專題介紹</Accordion.Control>
                <Accordion.Panel>
                  <ScrollArea 
                    h={'370'} 
                    type="auto"
                    offsetScrollbars
                  >
                    <Text className='text'>
                      {processedModalData.introduction}
                    </Text>
                  </ScrollArea>
                </Accordion.Panel>
              </Accordion.Item>
              <Accordion.Item key={'youtube'} value={'youtube'}>
                <Accordion.Control>專題影片</Accordion.Control>
                <Accordion.Panel>
                  {processedModalData.youtubeURL !== 'null' ? (
                    <iframe 
                      width="480" 
                      height="270" 
                      src={processedModalData.youtubeURL}
                      title="YouTube video player" 
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                      referrerPolicy="strict-origin-when-cross-origin" 
                      allowFullScreen
                    ></iframe>
                  ) : (
                    <Image 
                      src={undefindImg}
                      h={270}
                      w={480}
                    />
                  )}
                </Accordion.Panel>
              </Accordion.Item>
            </Accordion>
          </div>
        </div>
    </Modal>
  );
};

export default TopicModal;