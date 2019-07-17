import React, { Component } from 'react'
import Ball from "./Ball"
import { getRandom } from "../util"
/**
 * 每隔一段时间，自动产生一个小球，各种数据随机
 */
export default class BallList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            ballInfoes: []
        }
        const timer = setInterval(() => {
            var info = {
                left: getRandom(0, document.documentElement.clientWidth - 100),
                top: getRandom(0, document.documentElement.clientHeight - 100),
                xSpeed: getRandom(50, 500),
                ySpeed: getRandom(50, 500),
                bg: `rgb(${getRandom(0, 255)},${getRandom(0, 255)},${getRandom(0, 255)})`
            };
            this.setState({
                ballInfoes: [...this.state.ballInfoes, info]
            });
            if (this.state.ballInfoes.length === 10) {
                clearInterval(timer);
            }
        }, 1000);
    }

    render() {
        const balls = this.state.ballInfoes.map((item, i) => <Ball key={i} {...item} />)
        return (
            <>
                {balls}
            </>
        )
    }
}
