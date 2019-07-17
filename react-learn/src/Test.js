import React, { Component } from 'react'

export default class Test extends Component {

    state = {
        n: this.props.n
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            n: nextProps.n
        })
    }


    render() {
        return (
            <div>
                <h1>数字：{this.state.n}</h1>
                <p>
                    <button onClick={() => {
                        this.setState({
                            n: this.state.n + 1
                        })
                    }}>n加1</button>
                </p>
            </div>
        )
    }
}
