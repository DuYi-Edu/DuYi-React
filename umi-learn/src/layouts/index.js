import React from 'react'
import NavLink from "umi/navlink"
import "./index.css"

export default function index(props) {
    return (
        <div>
            <div>
                <NavLink exact to="/">首页</NavLink>
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
