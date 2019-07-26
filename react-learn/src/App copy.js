import React, { Component } from 'react'

export default class App extends Component {

    static childContextTypes = {

    }

    getChildContext(){
        return {}
    }

    constructor(props) {
        super(props)
        setTimeout(() => {
            console.log("Hello")
        }, 3000);
    }

    componentWillMount() {
        console.log("componentWillMount")
    }

    render() {
        return (
            <div ref="divTest">

            </div>
        )
    }
}
