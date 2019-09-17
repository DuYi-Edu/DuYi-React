import React from 'react'
import styles from "./index.css"

export default function index(props) {
    return (
        <div className={styles.menu}>
            <h1 className={styles.title}>欢迎使用学生管理系统</h1>
            <div className={styles.loginInfo}>
                <span>欢迎你</span>
                <span>{props.loginId}</span>
                <button onClick={props.onLoginOut}>退出登录</button>
            </div>
        </div>
    )
}
