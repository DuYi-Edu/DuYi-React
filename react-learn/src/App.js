import React from 'react'
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom"
import "./App.css"
import Page1 from "./Page1"
import Page2 from "./Page2"

export default function App() {
    return (
        <Router getUserConfirmation={(msg, callback) => {
            callback(window.confirm(msg));
        }}>
            <div className="nav">
                <NavLink to="/page1">页面1</NavLink>
                <NavLink to="/page2">页面2</NavLink>
            </div>
            <div className="container">
                <Route path="/page1" component={Page1} />
                <Route path="/page2" component={Page2} />
            </div>
        </Router>
    )
}
