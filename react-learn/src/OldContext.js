import React, { Component } from 'react'
import PropTypes from "prop-types";

const types = {
    a: PropTypes.number,
    b: PropTypes.string.isRequired,
    onChangeA: PropTypes.func
}

function ChildA(props, context) {
    return <div>
        <h1>ChildA</h1>
        <h2>a:{context.a}，b:{context.b}</h2>
        <ChildB />
    </div>
}

ChildA.contextTypes = types;

class ChildB extends React.Component {

    /**
     * 声明需要使用哪些上下文中的数据
     */
    static contextTypes = types

    render() {
        return <p>
            ChildB，来自于上下文的数据：a: {this.context.a}, b:{this.context.b}
            <button onClick={() => {
                this.context.onChangeA(this.context.a + 2);
            }}>子组件的按钮，a+2</button>
        </p>
    }
}

export default class OldContext extends Component {

    /**
     * 约束上下文中数据的类型
     */
    static childContextTypes = types

    state = {
        a: 123,
        b: "abc"
    }

    /**
     * 得到上下文中的数据
     */
    getChildContext() {
        console.log("获取新的上下文");
        return {
            a: this.state.a,
            b: this.state.b,
            onChangeA: (newA) => {
                this.setState({
                    a: newA
                })
            }
        }
    }

    render() {
        return (
            <div>
                <ChildA />
                <button onClick={() => {
                    this.setState({
                        a: this.state.a + 1
                    })
                }
                }>a加1</button>
            </div>
        )
    }
}
