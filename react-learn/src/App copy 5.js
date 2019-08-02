import React from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom"

//   /a
function A() {
    return <h1>组件A</h1>
}

//   /a/b
function B() {
    return <h1>组件B</h1>
}

// 任意路径
function C() {
    return <h1>
        找不到页面
        <Route path="/abc" exact component={D} />
    </h1>
}

function D() {
    return <span>D组件</span>
}

export default function App() {
    return (
        <Router>
            <Route path="/a" exact component={A}>
                <h1 style={{ color: "red" }}>必定会看到的内容</h1>
                <p>adfasdfasdf</p>
            </Route>
            <Route path="/a/b" component={B} />
            <Route component={C} />
        </Router>
    )
}
