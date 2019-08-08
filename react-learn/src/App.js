import React from 'react'
import { HashRouter as Router, Route, Switch, Link } from "react-router-dom"
import Home from "./Home"
import Personal from "./Personal"
import Login from "./Login"
import ProtectedRoute from "./ProtectedRoute"

export default function App() {
    return (
        <Router>
            <div>
                <ul>
                    <li><Link to="/">首页</Link></li>
                    <li><Link to="/login">登录页</Link></li>
                    <li><Link to="/personal">个人中心</Link></li>
                </ul>
                <div>
                    <Switch>
                        <Route path="/login" component={Login} />
                        <ProtectedRoute path="/personal" component={Personal}/>
                        {/* render和children的区别：render是匹配后才会运行，children无论是否匹配都会运行 */}
                        {/* <Route path="/personal" render={ values => {
                            console.log(values)
                            return <h1>asdfdasdfa</h1>
                        }} /> */}
                        <Route path="/" component={Home} />
                    </Switch>
                </div>
            </div>
        </Router>
    )
}
