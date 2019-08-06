import React from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

function News(props) {
    console.log(props.match)
    return <div>
        <p>显示{props.match.params.year}年{props.match.params.month}月{props.match.params.day}日的新闻</p>
    </div>
}

function NotFound() {
    return <h1>找不到页面</h1>
}
export default function App() {
    return (
        <Router>
            <Switch>
                <Route path="/news/:year(\d+)/:month(\d+)/:day(\d+)" component={News} />
                <Route component={NotFound} />
            </Switch>
        </Router>
    )
}
