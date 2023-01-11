import React, { useState } from 'react';
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import { Rate } from 'antd';
import { Avatar } from 'antd';
import { ConfigProvider } from 'antd';
import { InstagramOutlined } from "@ant-design/icons";
import { Row, Col } from 'antd';
import { Checkbox } from 'antd';
import type { CheckboxChangeEvent } from 'antd/es/checkbox';
import koKR from 'antd/es/locale/ko_KR';

const { Header, Content, Footer, Sider } = Layout;
const desc = ['terrible', 'bad', 'normal', 'good', 'wonderful'];
const onChange = (e: CheckboxChangeEvent) => {
  console.log(`checked = ${e.target.checked}`);
};

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
  getItem('Option 1', '1', <PieChartOutlined />),
  getItem('Option 2', '2', <DesktopOutlined />),
  getItem('User', 'sub1', <UserOutlined />, [
    getItem('김유택', '3'),
    getItem('손수현', '4'),
    getItem('이승연', '5'),
    getItem('김대완', '6')
  ]),
  getItem('Team', 'sub2', <TeamOutlined />, [getItem('FrontEnd', '6'), getItem('BackEnd', '8')]),
  getItem('Files', '9', <FileOutlined />),
];

const App: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [value, setValue] = useState(3);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <div style={{ height: 32, margin: 16, background: 'rgba(255, 255, 255, 0.2)', color: 'rgba(255, 255, 255, 1)', textAlign: "center", lineHeight: 2 }}>ERP Innovation</div>
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
      </Sider>
      <Layout className="site-layout">
        <Header style={{ padding: 0, background: colorBgContainer }}>
          Ant design test
        </Header>
        <Content style={{ margin: '0 16px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
          </Breadcrumb>
          <div style={{ padding: 24, minHeight: 160, background: colorBgContainer }}>
            2023 frontend goals.
          </div>
          <div style={{ margin: 10}}>
            <span>
            <Avatar size="large" icon={<UserOutlined />} />
            </span>
            <span style={{padding: 5}}>손수현 1월 2주 업무 평가</span>
            <span>
              <Rate tooltips={desc} onChange={setValue} value={value} />
              {value ? <span className="ant-rate-text">{desc[value - 1]}</span> : ''}
            </span>
            <p>
              <InstagramOutlined />
            </p>
          </div>
          <div style={{ margin: 10}}>
            <p>ToDo CheckList</p>
            <form>
              <p>
                <Checkbox onChange={onChange}>storybook</Checkbox>
              </p>
              <p>
                <Checkbox onChange={onChange}>ant design</Checkbox>
              </p>
              <p>
                <Checkbox onChange={onChange}>typeScript</Checkbox>
              </p>
            </form>
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
      </Layout>
    </Layout>
  );

};

export default App;