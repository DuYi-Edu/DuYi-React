import React from 'react'
// import Link from "umi/link" //实际上就是react-router-dom中的Link组件
// import NavLink from "umi/navlink" //实际上就是react-router-dom中的NavLink组件
import Menu from "@/components/Menu"

export default function index(props) {
    return (
        <div>
            {/* <div>
                <NavLink to="/">首页</NavLink>
                <NavLink to="/a">a页</NavLink>
                <NavLink to="/b">b页</NavLink>
                <NavLink to="/sub">sub页</NavLink>
            </div> */}
            <Menu />
            {props.children}
            <div><h1>页脚</h1></div>
        </div>
    )
}
