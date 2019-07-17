import React, { Component } from 'react'
import Test from "./Test"

export default class App extends Component {
    state = {
        number: 1
    }

    render() {

        return (
            <div>
                <Test n={this.state.number} />
                <p>
                    <button onClick={() => {
                        this.setState({
                            number: this.state.number + 1
                        })
                    }}>父组件按钮+1</button>
                </p>
            </div>
        )
    }
}
