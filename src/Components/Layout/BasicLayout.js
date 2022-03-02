import React from "react";
import { Layout, Menu } from "antd";
import { useHistory } from "react-router-dom";

import "./Layout.css";

const { Header } = Layout;

const BasicLayout = () => {
  const history = useHistory();
  const selectMenu = history.location.pathname.split("/")[1];
  return (
    <>
      <Layout className="layout">
        <Header>
          <div className="logo" />
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={"home"}
            selectedKeys={[selectMenu || "home"]}
            onSelect={({ key }) =>
              key === "home" ? history.push("/") : history.push(`/${key}`)
            }
          >
            <Menu.Item key={"home"}>Registration</Menu.Item>
            <Menu.Item key={"profile"}>Profiles</Menu.Item>
            <Menu.Item key={"university"}>Universities</Menu.Item>
            <Menu.Item key={"notifications"}>Notifications</Menu.Item>
          </Menu>
        </Header>
      </Layout>
    </>
  );
};
export default BasicLayout;
