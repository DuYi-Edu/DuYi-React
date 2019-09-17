import React from 'react'
import Layout from "../components/Layout"
import Menu from "../components/Menu"
import Aside from "../components/Aside"
import styles from "./index.css"

export default function index(props) {
    if (props.location.pathname === "/login") {
        //登录页
        return props.children;
    }
    else {
        return <Layout
            header={<Menu />}
            aside={<Aside />}
            main={<div className={styles.main}>
                {props.children}
            </div>}
        />
    }
}
