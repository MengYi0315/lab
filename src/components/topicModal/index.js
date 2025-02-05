/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import _ from 'lodash';
import { Modal } from '@mantine/core';
// import { useDisclosure } from '@mantine/hooks';
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
    </Modal>
  );
};

export default TopicModal;