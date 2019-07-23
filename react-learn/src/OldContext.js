import React, { Component } from 'react'
import PropTypes from "prop-types";

export default class OldContext extends Component {

    /**
     * 约束上下文中的数据是什么类型
     */
    static childContextTypes = {
        a: PropTypes.number,
        b: PropTypes.string
    }

    componentDidMount() {
        console.log("componentDidMount")
    }

    componentWillMount() {
        console.log("componentWillMount")
    }
    

    state = {
        a: 123,
        b: "abc"
    }
    /**
     * 获取上下文中的数据
     */
    getChildContext() {
        console.log("获取上下文中的数据");
        return this.state;
    }

    render() {
        console.log("render");
        return (
            <div>
                <button onClick={()=>{
                    this.setState({});
                }}>改变</button>
            </div>
        )
    }
}
