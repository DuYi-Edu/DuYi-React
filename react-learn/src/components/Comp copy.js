import React, { Component } from 'react'

class A extends Component {

    method() {
        console.log("调用了组件A的方法")
    }

    render() {
        return <h1>组件A</h1>
    }
}

// function B(){
//     return <h1>组件B</h1>
// }

export default class Comp extends Component {

    handleClick = () => {
        console.log(this);
        this.refs.txt.focus();
        this.refs.compA.method();
    }

    render() {
        return (
            <div>
                <input ref="txt" type="text" />
                <A ref="compA" />
                {/* <B ref="compB" /> */}
                <button onClick={this.handleClick}>聚焦</button>
            </div>
        )
    }
}
