/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import _ from 'lodash';
import { Link, useLocation } from "react-router-dom";
import { Image, Menu } from '@mantine/core';
import logo from '../../assets/logo.png';
import './index.scss';

const Header = (props) => {
  console.log('header props',props)
  const [isHovered, setIsHovered] = useState(false);
  const location = useLocation();
  const isLoginPage = _.includes(location.pathname, 'login');

  const getHeaderBackground = () => {
    if (!isLoginPage) 
      return '#FFF';
    return isHovered ? '#FFF' : 'transparent';
  };
  const getHeaderTextColor = () => {
    if (!isLoginPage) 
      return '#155484';
    return isHovered ? '#155484' : '#FFF';
  };
  const getHeaderLogo = () => {
    if (!isLoginPage) 
      return 'block';
    return isHovered ? 'block' : 'none';

  };
  

  return (
    <div 
      id="header"
      style={{
        backgroundColor: getHeaderBackground(),
        transition: 'background-color 0.3s ease',
        borderBottom: isLoginPage ? '0px' : '2px solid #ebedff',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className='logo-div ml-20'>
        <Image 
          h={50}
          w="auto"
          radius={"md"}
          src={logo}
          style={{
            display: getHeaderLogo(),
            transition: 'display 0.3s ease',
          }}
        />
      </div>
      <div className='menu'>
        {_.map(props.menu, (m) => (
          <>
            {_.isEmpty(m.children) ? (
              <Link 
                to={m.path} 
                className='menu_item'
                style={{
                  color: getHeaderTextColor(),
                  // transition: 'color 0.3s ease',
                }}
              >
                {m.title}
              </Link>    
            ) : (
              <Menu 
                trigger='click-hover' 
                openDelay={100} 
                closeDelay={100} 
                offset={0} 
                width={180}
                transitionProps={{
                  transition: 'scale-y', 
                  duration: 300,  
                }}
                style={{
                  color: getHeaderTextColor(),
                  // transition: 'color 0.3s ease',
                }}
              >
                <Menu.Target>
                  <Link to={m.path} className='menu_item'>
                    {m.title}
                  </Link>
                </Menu.Target>
                <Menu.Dropdown
                  styles={{
                    dropdown: { 
                      border: '#ebedf1 1px solid', 
                      borderRadius: '0px', 
                      padding: '0px', 
                    }, 
                  }}    
                >
                  {_.map(m.children, (c) => (
                    <Menu.Item
                      component='a'
                      href={c.path}
                      styles={{ 
                        item: {
                          padding: '12px 10px', 
                        },
                        itemLabel: {
                          textDecoration: 'none', 
                          fontSize: '16px', 
                          fontWeight: 'bold', 
                        }, 
                      }}
                    >
                      {c.title}
                    </Menu.Item>
                  ))}
                </Menu.Dropdown>
              </Menu>
            )}
          </>
        ))}
      </div>
    </div>
  );
};

export default Header;