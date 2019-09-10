import React from 'react'
import NavLink from "umi/navlink"
import "./index.css"

export default function index(props) {
    // const config = props.route.routes.find(config => config.path === props.location.pathname)
    // var title = "无标题";
    // if (config && config.title) {
    //     title = config.title;
    // }
    // document.title = title;
    return (
        <div>
            <div>
                <NavLink to="/">首页</NavLink>
                <NavLink to="/login">登录页</NavLink>
                <NavLink to="/welcome">欢迎页</NavLink>
                <NavLink to="/counter">计数器</NavLink>
            </div>
            <div>
                {props.children}
            </div>
        </div>
    )
}
