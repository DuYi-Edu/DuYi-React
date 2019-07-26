import React, { Component } from 'react'


export default class App extends Component {
    state = {
        visible: false
    }
    render() {
        // if (this.state.visible) {
        //     return <div>
        //         <h1>标题</h1>
        //         <button onClick={() => {
        //             this.setState({
        //                 visible: !this.state.visible
        //             })
        //         }}>显示/隐藏</button>
        //     </div>;
        // }
        const h1 = this.state.visible? <h1>标题</h1> : null;
        return (
            <div>
                {h1}
                <button onClick={() => {
                    this.setState({
                        visible: !this.state.visible
                    })
                }}>显示/隐藏</button>
            </div>
        )
    }
}
