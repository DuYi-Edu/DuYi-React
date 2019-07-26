import React, { Component } from 'react'

class CompA extends Component {

    componentDidMount() {
        console.log("CompA 新建")
    }

    componentWillUnmount() {
        console.log("CompA 卸载")
    }


    render() {
        return <h1>CompA</h1>
    }
}

export default class App extends Component {
    state = {
        visbile: true
    }
    render() {
        return (
            <div>
                <CompA key={Math.random()} />
                <button onClick={()=>{
                    this.setState({})
                }}>点击更新</button>
            </div>
        )
    }
}
