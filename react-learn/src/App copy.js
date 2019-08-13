import React, { Component } from 'react'
import FadeTransition from "./components/common/FadeTransition"

export default class App extends Component {
    state = {
        show: true
    }

    render() {
        return <div>
            <FadeTransition timeout={5000} in={this.state.show}>
                <h1>标题</h1>
            </FadeTransition>
            <button onClick={() => {
                this.setState({
                    show: !this.state.show
                })
            }}>切换显示状态</button>
        </div>
    }
}
