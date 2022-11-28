import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import {  Menu } from 'antd';
import React, { useEffect, useState } from 'react';
import { useNavigate, Link, useLocation } from 'react-router-dom';
type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem(<Link to='/'>Option 1</Link>, '/page1', <PieChartOutlined />),
  getItem('Option 2', '/page2', <DesktopOutlined />),
  getItem('User', '/page3', <UserOutlined />, [
    getItem('Tom', '/page3/page301'),
    getItem('Bill', '/page3/page302'),
    getItem('Alex', '/page3/page303'),
  ]),
  getItem('Team', '/page4', <TeamOutlined />, [
    getItem('Team 1', '/page4/page401'),
    getItem('Team 2', '/page4/page402')]),
  getItem('Files', '/page5', <FileOutlined />),
];

export const MainMenu: React.FC=() =>{
  const navigate=useNavigate()
  const {pathname}=useLocation()
  // 子路由跳转
  const menuClick=(e:{key:string})=>{
    // console.log(e.key);
    navigate(e.key)
  }
  let initSelect:string=''
  // 只能有一个展开项
  const [openKeys, setOpenKeys] = useState([initSelect]);
  // 拥有的可展开项
  const rootSubmenuKeys = ['page3', 'page4'];
  const handleOpen=(keys:string[])=>{
    // console.log(keys);
    // const latestOpenKey = keys.find(key => openKeys.indexOf(key) === -1);
    // if (rootSubmenuKeys.indexOf(latestOpenKey!) === -1) {
    //   setOpenKeys(keys);
    // } else {
    //   setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    // }
    // 这是一个更简单的写法
    // keys是一个字符串数组，记录了当前的那一项是展开的
    // 把openKeys数组修改成，keys这个[]的最后一项，因为它记录了我们最后点击的那一项
    setOpenKeys([keys[keys.length-1]])
  }

  // 刷新时被选中的menu初始化的问题
  useEffect(()=>{
    const refreshThePage=()=>{
      let rank=pathname.split('/') 
      //  pathname:  /page3/page301    rank: ['', 'page3', 'page301']
      // 判断是几级菜单，二级菜单rank.length为3
      if(rank.length===3){
        let newOpenkeys=rank.slice(0,2).join('/') // newOpenkeys: /page3
        setOpenKeys([newOpenkeys])
      }
      
    }
    refreshThePage()
  },[])
  

  return (
    <Menu theme="dark"
    selectedKeys={[pathname]} 
    openKeys={openKeys} mode="inline" 
    items={items} 
    onOpenChange={handleOpen} 
    onClick={menuClick}/>
  )
}

