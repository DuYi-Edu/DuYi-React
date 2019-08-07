import React from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom"

function User({match}) {
    return <div>
        <h1>User组件固定的区域</h1>
        <p>
            <Link to={`${match.url}/update`}>用户信息</Link>
            <Link to={`${match.url}/pay`}>充值</Link>
        </p>
        <div style={{
            width: 500,
            height: 500,
            background: "lightblue",
            border: "2px solid",
            margin: "0 auto"
        }}>
            {/* User组件变化的区域：根据地址的不同发生变化 */}
            <Route path={`${match.url}/update`} component={UserUpdate} />
            <Route path={`${match.url}/pay`} component={UserPay} />
        </div>

    </div>
}

function UserUpdate() {
    return <h1>修改用户信息</h1>
}

function UserPay() {
    return <h1>用户充值</h1>
}

export default function App() {
    return (
        <Router>
            <Route path="/u" component={User} />
            {/* 其他组件 */}
        </Router>
    )
}
