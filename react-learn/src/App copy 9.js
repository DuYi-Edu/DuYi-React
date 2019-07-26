import React, { Component } from 'react'


class CompA extends Component {

    state = {
        n: 1
    }

    componentDidMount() {
        console.log("CompA 新建")
    }

    componentWillUnmount() {
        console.log("CompA 卸载")
    }


    render() {
        return <div>
            数字：{this.state.n} <button onClick={() => {
                this.setState({
                    n: this.state.n + 1
                })
            }}>+</button>
        </div>
    }
}

export default class App extends Component {
    state = {
        arr: [<CompA key={1} />, <CompA key={2} />],
        nextId: 3
    }
    render() {
        return (
            <div>
                {this.state.arr}
                <button onClick={() => {
                    this.setState({
                        arr: [
                            <CompA key={this.state.nextId} />,
                            ...this.state.arr
                        ],
                        nextId: this.state.nextId + 1
                    })
                }}>添加一项</button>
            </div>
        )
    }
}
