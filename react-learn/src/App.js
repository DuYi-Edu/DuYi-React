import React, { Component } from 'react'
import FadeTransition from "./components/common/FadeTransition"
import { TransitionGroup } from "react-transition-group"
import uuid from "uuid";

export default class App extends Component {
    state = {
        tasks: [
            { id: uuid(), name: "任务1" },
            { id: uuid(), name: "任务2" },
            { id: uuid(), name: "任务3" }
        ]
    }

    render() {
        return <div>
            <TransitionGroup component="ul">
                {this.state.tasks.map(t => (
                    <FadeTransition appear timeout={500} key={t.id}>
                        <li>{t.name}
                            <button onClick={() => {
                                this.setState({
                                    tasks: this.state.tasks.filter(it => it.id !== t.id)
                                })
                            }}>删除</button>
                        </li>
                    </FadeTransition>
                ))}
            </TransitionGroup>
            <button onClick={() => {
                var name = window.prompt("请输入任务名称");
                this.setState({
                    tasks: [...this.state.tasks, { id: uuid(), name }]
                })
            }}>添加</button>
        </div>
    }
}
