import React from 'react'
import { NavLink } from "umi"
import withRouter from "umi/withRouter"
import { Menu } from "antd"

const { SubMenu } = Menu;

function Aside({location}) {

    return (
        <Menu selectedKeys={[location.pathname]} theme="dark" mode="inline">
            <Menu.Item key="/">
                <NavLink to="/">后台管理首页</NavLink>
            </Menu.Item>
            <SubMenu title="学生管理">
                <Menu.Item key="/student">
                    <NavLink to="/student">学生查询</NavLink>
                </Menu.Item>
                <Menu.Item key="/student/add">
                    <NavLink to="/student/add">添加学生</NavLink>
                </Menu.Item>
            </SubMenu>
        </Menu>
    )
}


export default withRouter(Aside);