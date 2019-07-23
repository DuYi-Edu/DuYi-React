import React, { Component } from 'react'

const ctx = React.createContext();
class ChildB extends React.Component {

    static contextType = ctx;

    shouldComponentUpdate(nextProps, nextState) {
        console.log("运行了优化")
        return false;
    }


    render() {
        console.log("childB render");
        return (
            <h1>
                a:{this.context.a}，b:{this.context.b}
            </h1>
        );
    }
}

export default class NewContext extends Component {

    datas = [{
        a: 0,
        b: "abc",
        changeA: (newA) => {
            this.setState({
                a: newA
            })
        }
    }]

    state = this.datas[0]

    render() {
        return (
            <ctx.Provider value={{
                ...this.state
            }}>
                <div>
                    <ChildB />

                    <button onClick={() => {
                        this.setState({}, () => {
                            this.datas.push(this.state);
                            console.log(this.datas[0] === this.datas[1])
                        })
                    }}>父组件的按钮，a加1</button>
                </div>
            </ctx.Provider>
        )
    }
}
