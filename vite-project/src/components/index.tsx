import React, { useState, useEffect } from 'react'
import { Outlet,useNavigate,useLocation } from 'react-router-dom'
import { TabBar, TabBarItem } from 'tdesign-mobile-react';
import { Icon } from 'tdesign-icons-react';
import './index.module.less'
export default function index() {
    const navigate = useNavigate();
    const location = useLocation();
    const list = [
        { name: '/home', text: '首页', icon: 'home', badgeProps: { count: 16 }, ariaLabel: '首页，有16条消息' },
        { name: '/video', text: '视频', icon: 'logo-youtube', badgeProps: { dot: true }, ariaLabel: '软件，有新的消息' },
        { name: '/message', text: '消息', icon: 'notification', badgeProps: { count: 'New' }, ariaLabel: '聊天，New' },
        { name: '/mine', text: '我的', icon: 'user', ariaLabel: '我的，有很多消息' },
      ];
      const [value, setValue] = useState(location.pathname);
    
      const change = (changeValue) => {
        setValue(changeValue);
        navigate(changeValue);
      };
    
      useEffect(() => {
        console.log('当前值：', value);
      }, [value]);


  return (
    <div className='index-box'>
        <div className='index-header'>

        </div>
        <div className='index-content'>
        <Outlet></Outlet>
        </div>
        <div className='index-footer'>
        <TabBar value={value} onChange={change} split={false}>
            {list.map((item, i) => (
            <TabBarItem
                key={item.name || i}
                icon={<Icon name={item.icon} />}
                value={item.name}
                badgeProps={item.badgeProps}
            >
                {item.text}
            </TabBarItem>
            ))}
        </TabBar>
        </div>
    </div>
  )
}
