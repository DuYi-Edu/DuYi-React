import React from 'react'
import { Route, Link } from "react-router-dom"
import RouteGuard from './RouteGuard';

function Page1() {
    return <h1>Page1</h1>
}

function Page2() {
    return <h1>Page2</h1>
}

export default function App() {
    return (
        <RouteGuard
            onBeforeChange={(prev, cur, action, commit, unBlock) => {
                console.log(`页面想要从${prev.pathname}跳转到${cur.pathname}，跳转方式是${action}，允许跳转`)
                commit(true);
                unBlock();//取消阻塞，仅阻塞了一次
            }}
            onChange={(prevLocation, location, action, unListen) => {
                console.log(`日志：从${prevLocation.pathname}进入页面${location.pathname}，进入方式${action}`)
                unListen();//取消监听，仅监听了一次
            }}
        >
            <ul>
                <li>
                    <Link to="/page1">页面1</Link>
                </li>
                <li>
                    <Link to="/page2">页面2</Link>
                </li>
            </ul>

            <Route path="/page1" component={Page1} />
            <Route path="/page2" component={Page2} />
        </RouteGuard>
    )
}
