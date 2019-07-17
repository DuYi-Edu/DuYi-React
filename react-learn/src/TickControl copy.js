import React, { Component } from 'react'
import Tick from "./Tick"

export default class TickControl extends Component {

    state = {
        isOver: false //倒计时是否完成
    }

    // constructor(props){
    //     super(props);
    //     this.handleClick = this.handleClick.bind(this);
    //     this.handleOver = this.handleOver.bind(this);
    // }

    handleClick() {
        console.log(this)
        console.log("点击了")
    }

    handleOver() {
        this.setState({
            isOver: true
        })
    }

    render() {
        let status = "正在倒计时";
        if (this.state.isOver) {
            status = "倒计时完成";
        }
        return (
            <div>
                <Tick
                    onClick={this.handleClick.bind(this)}
                    onOver={this.handleClick.bind(this)}
                    number={10} />
                <h2>
                    {status}
                </h2>
            </div>
        )
    }
}
