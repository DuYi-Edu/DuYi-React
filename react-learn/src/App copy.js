import React from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
// import Link from "./Link"

function PageA() {
    return <h1>A页</h1>
}

function PageB() {
    return <h1>B页</h1>
}

function NavBar() {
    return <div>
        <Link innerRef={node=>{
            console.log(node)
        }} to="/a" style={{ marginRight: 20 }}>去a页</Link>
        <Link replace to={{
            pathname: "/b",
            hash: "#abc",
            search: "?a=1&b=2"
        }}>去b页</Link>
    </div>
}

export default function App() {
    return (
        <Router>
            <NavBar />
            <Route path="/a" component={PageA} />
            <Route path="/b" component={PageB} />
        </Router>
    )
}
