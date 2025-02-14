/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import _ from 'lodash';
import { Modal, Image, Accordion } from '@mantine/core';
import './index.scss';
import '../../mixin/animista.scss';

const TopicModal = (props) => {
  console.log('topic modal props',props)
  const { opened, open, close } = props; // mantine hook api
  const { modalData } = props;

  console.log('modal data', modalData)

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
          fontSize: '25px'
        }
      }}
    >
      <div id='partner-div'>
        {_.map(modalData.partner, (item) => (
          <div className='name-div'>
            {item}
          </div>
        ))}
      </div>
      <div id='topic_div' className='mt-20'>
          <div>
            <Image
              radius={'0px'}
              src={modalData.photo}
              w={400}
              h={400}
            />
          </div>
          <div className='content_div ml-20'>
            <Accordion defaultValue="introduction">
              <Accordion.Item key={'introduction'} value={'introduction'}>
                <Accordion.Control>專題介紹</Accordion.Control>
                <Accordion.Panel>
                  {modalData.introduction}
                </Accordion.Panel>
              </Accordion.Item>
              <Accordion.Item key={'youtube'} value={'youtube'}>
                <Accordion.Control>影片</Accordion.Control>
                <Accordion.Panel>
                  {modalData.introduction}
                </Accordion.Panel>
              </Accordion.Item>
            </Accordion>
          </div>
        </div>

    </Modal>
  );
};

export default TopicModal;