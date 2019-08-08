import React from 'react'
import { BrowserRouter as Router } from "react-router-dom"
import Link from "./BetterLink"
import RootRouter from "./RootRouter";
import "./App.css"

export default function App() {
    return (
        <Router>
            <nav>
                <Link to={{name:"home"}}>首页</Link>
                <Link to={{name:"news"}}>新闻页</Link>
            </nav>
            <div>
                {/* 匹配网站的顶级页面 */}
                <RootRouter />
            </div>
        </Router>
    )
}