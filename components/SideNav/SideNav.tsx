"use client";
import React, { useState } from "react";
import {
  UsergroupAddOutlined,
  FileOutlined,
  PoundOutlined,
  FileZipOutlined,
  DollarOutlined,
  UserAddOutlined,
  PieChartOutlined,
  GlobalOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Button, Menu } from "antd";

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: "group"
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem("Company Overview", "1", <PieChartOutlined />),
  getItem("Future Growth", "2", <GlobalOutlined />),
  getItem("Past Performance", "3", <FileOutlined />),
  getItem("Financial health", "4", <PoundOutlined />),
  getItem("Dividend", "5", <DollarOutlined />),
  getItem("Management", "6", <UsergroupAddOutlined />),
  getItem("Ownership", "7", <UserAddOutlined />),
  getItem("Other Information", "8", <FileZipOutlined />),
];

const App: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div style={{ width: 256 }}>
      <Button
        type="primary"
        onClick={toggleCollapsed}
        style={{ marginBottom: 16 }}
      >
        {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
      </Button>
      <Menu
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        mode="inline"
        theme="dark"
        inlineCollapsed={collapsed}
        items={items}
      />
    </div>
  );
};

export default App;
