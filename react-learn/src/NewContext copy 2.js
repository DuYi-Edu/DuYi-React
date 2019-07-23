import React, { Component } from 'react'

const ctx = React.createContext();

function ChildA(props) {
    return <div>
        <h1>ChildA</h1>
        <h2>
            <ctx.Consumer>
                {value => <>{value.a}，{value.b}</>}
            </ctx.Consumer>
        </h2>
        <ChildB />
    </div>
}

class ChildB extends React.Component {

    render() {
        return (
            <ctx.Consumer>
                {value => (
                    <p>
                        ChildB，来自于上下文的数据：a: {value.a}, b:{value.b}
                        <button onClick={() => {
                            value.changeA(value.a + 2);
                        }}>后代组件的按钮，点击a+2</button>
                    </p>
                )}
            </ctx.Consumer>
        );
    }
}

export default class NewContext extends Component {

    state = {
        a: 0,
        b: "abc",
        changeA: (newA) => {
            this.setState({
                a: newA
            })
        }
    }

    render() {
        return (
            <ctx.Provider value={this.state}>
                <div>
                    <ChildA />

                    <button onClick={() => {
                        this.setState({
                            a: this.state.a + 1
                        })
                    }}>父组件的按钮，a加1</button>
                </div>
            </ctx.Provider>
        )
    }
}
