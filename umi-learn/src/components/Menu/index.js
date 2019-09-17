import React from 'react'
import styles from "./index.css"

export default function index() {
    return (
        <div className={styles.menu}>
            <h1 className={styles.title}>欢迎使用学生管理系统</h1>
            <div className={styles.loginInfo}>
                <span>欢迎你</span>
                <span>用户名</span>
                <button>退出登录</button>
            </div>
        </div>
    )
}
