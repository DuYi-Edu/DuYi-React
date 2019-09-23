import React from 'react'
import styles from "./index.css"
import { Layout } from "antd"

const { Header, Content, Sider } = Layout;

export default function index(props) {

    return (
        <Layout>
            <Header>
                {props.header}
            </Header>
            <Layout className={styles.main}>
                <Sider>
                    {props.aside}
                </Sider>
                <Content>
                    {props.main}
                </Content>
            </Layout>
        </Layout>
    );
}
