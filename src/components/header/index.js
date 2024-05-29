/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import _ from 'lodash';
import { Link } from "react-router-dom";
import { Image, Menu } from '@mantine/core';
import logo from '../../assets/logo.png';
import './index.scss';

const Header = (props) => {
    console.log('header props',props)
    return (
        <div id="header">
            <div className='logo-div ml-20'>
                <Image 
                    h={50}
                    w="auto"
                    radius={"md"}
                    src={logo}
                />
            </div>
            <div className='menu'>
                {_.map(props.menu, (m) => (
                    <>
                        {_.isEmpty(m.children) ? (
                            <Link to={m.path} className='menu-item'>
                                {m.title}
                            </Link>    
                        ) : (
                            <Menu  openDelay={100} closeDelay={100} offset={0} width={180}>
                                <Menu.Target>
                                    <Link to={m.path} className='menu-item'>
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
                                                    padding: '10px', 
                                                },
                                                itemLabel: {
                                                    textDecoration: 'none', 
                                                    fontSize: '16px', 
                                                    fontWeight: 'bold', 
                                                    color: '#1F0737', 
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