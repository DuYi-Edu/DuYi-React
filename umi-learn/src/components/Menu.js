import React from 'react'
import NavLink from "umi/navlink"
import router from "umi/router"

export default function Menu() {
    return (
        <div>
            <NavLink to="/">首页</NavLink>
            <button onClick={() => {
                router.push("/a")
            }}>a页</button>
            <NavLink to="/b">b页</NavLink>
            <button onClick={() => {
                router.push("/sub")
            }}>sub页</button>
        </div>
    )
}
