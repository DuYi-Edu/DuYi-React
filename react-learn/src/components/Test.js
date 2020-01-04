import React, { Component } from 'react'

export default class A extends Component {
    state = {
        n: 123,
        b: 100
    }

    constructor(props) {
        super(props);
        setInterval(() => {
            this.setState({
                n: this.state.b - 1
            })
        }, 1000);
    }

    render() {
        console.log("A组件重新渲染了")
        return (
            <div>
                <B n={this.state.n} />
            </div>
        )
    }
}

function B(props) {
    console.log("B组件重新渲染了")
    return <div>
        B组件：{props.n}
        <C n={props.n} />
    </div>
}

function C(props) {
    console.log("C组件重新渲染了")
    return <div>
        C组件：{props.n}
    </div>
}
