import React, { Component } from 'react'
import PropTypes from "prop-types";
import ctx from "./RouterContext";
import matchPath from "./matchPath"

export default class Router extends Component {

    static propTypes = {
        history: PropTypes.object.isRequired,
        children: PropTypes.node
    }

    state = {
        location: this.props.history.location
    }

    componentDidMount() {
        this.unListen = this.props.history.listen((location, action) => {
            this.props.history.action = action;
            this.setState({
                location
            })
        })
    }

    componentWillUnmount() {
        this.unListen();//取消监听
    }
    

    render() {
        const ctxValue = {
            history: this.props.history,
            location: this.state.location,
            match: matchPath("/", this.state.location.pathname)
        }
        return <ctx.Provider value={ctxValue}>
            {this.props.children}
        </ctx.Provider>
    }
}
