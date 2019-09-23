import React from 'react'
import { NavLink } from "umi"
import withRouter from "umi/withRouter"
import { Menu } from "antd"

const { SubMenu } = Menu;

const menuConfig = [
    { key: "/", title: "后台管理首页" },
    {
        key: "studentManager", title: "学生管理",
        children: [
            { key: "/student", title: "学生查询" },
            { key: "/student/add", title: "添加学生" }
        ]
    }
]

function Aside({ location }) {
    const menus = menuConfig.map(item => {
        if (item.children) {
            const subMenus = item.children.map(subItem => (<Menu.Item key={subItem.key}>
                <NavLink to={subItem.key}>{subItem.title}</NavLink>
            </Menu.Item>))
            return <SubMenu key={item.key} title={item.title}>
                {subMenus}
            </SubMenu>
        }
        else {
            return <Menu.Item key={item.key}>
                <NavLink to={item.key}>{item.title}</NavLink>
            </Menu.Item>
        }
    })
    const openKeys = [];
    for (const item of menuConfig) {
        if (item.children) {
            for (const subItem of item.children) {
                if (subItem.key === location.pathname && !openKeys.includes(item.key)) {
                    openKeys.push(item.key);
                }
            }
        }
    }
    return (
        <Menu defaultOpenKeys={openKeys} selectedKeys={[location.pathname]} theme="dark" mode="inline">
            {menus}
        </Menu>
    )
}


export default withRouter(Aside);