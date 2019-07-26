import React, { Component } from 'react'

class CompA extends Component {
    componentDidMount() {
        console.log("CompA 新组件挂载")
    }

    componentWillUnmount() {
        console.log("CompA 卸载")
    }

    render() {
        console.log("CompA render")
        return <CompAA />
    }
}

class CompAA extends Component {
    componentDidMount() {
        console.log("CompAA 新组件挂载")
    }

    componentWillUnmount() {
        console.log("CompAA 卸载")
    }

    render(){
        console.log("CompAA render")
        return null;
    }
}

class CompB extends Component {
    componentDidMount() {
        console.log("CompB 新组件挂载")
    }

    componentWillUnmount() {
        console.log("CompB 卸载")
    }
    render() {
        console.log("CompB render")
        return <CompBB />
    }
}

class CompBB extends Component {
    componentDidMount() {
        console.log("CompBB 新组件挂载")
    }

    componentWillUnmount() {
        console.log("CompBB 卸载")
    }

    render(){
        console.log("CompBB render")
        return null;
    }
}



export default class App extends Component {
    state = {
        n: 0
    }
    render() {
        if (this.state.n === 0) {
            return <div>
                <CompB />
                <button onClick={() => {
                    this.setState({
                        n: 1
                    })
                }}>点击</button>
            </div>;
        }
        return (
            <CompA />
        )
    }
}
