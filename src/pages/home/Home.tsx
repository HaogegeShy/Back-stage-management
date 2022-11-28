import { Breadcrumb, Layout } from 'antd';
import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import {MainMenu} from '../../components'


const { Header, Content, Footer, Sider } = Layout;



const Home: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible collapsed={collapsed} onCollapse={value => setCollapsed(value)}>
        <div  className="logo" />
        <MainMenu/>
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ paddingLeft: '16px' }} >
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
          </Breadcrumb>
        </Header>
        <Content style={{ margin: '16px 16px 0' }}  className="site-layout-background">
          {/* 子路由展示区 */}
          <Outlet/>
        </Content>
        <Footer style={{ textAlign: 'center', padding:"0",lineHeight:'48px'}}>Ant Design ©2018 Created by Ant UED</Footer>
      </Layout>
    </Layout>
  );
};


export default Home
export {Home}