import React from 'react'
import styles from "./index.css"
import { NavLink } from "umi"

export default function index() {
    return (
        <ul className={styles.nav}>
            <li><NavLink exact activeClassName={styles.active} to="/">后台管理首页</NavLink></li>
            <li><NavLink exact activeClassName={styles.active} to="/student">学生查询</NavLink></li>
            <li><NavLink exact activeClassName={styles.active} to="/student/add">添加学生</NavLink></li>
        </ul>
    )
}
