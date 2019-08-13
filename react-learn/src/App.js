import React, { useState } from 'react'
import uuid from "uuid";
import { TransitionGroup, CSSTransition } from "react-transition-group"
import "./App.css"

export default function App() {
    const [tasksList, setTasksList] = useState([
        { id: uuid(), name: "任务1" },
        { id: uuid(), name: "任务2" },
    ]);
    return (
        <div>
            <TransitionGroup appear component="ul" className="abc">
                {
                    tasksList.map(t => (
                        <CSSTransition  timeout={2000} key={t.id}>
                            <li>{t.name} <button
                                onClick={() => {
                                    var newTasks = tasksList.filter(it => it.id !== t.id);
                                    setTasksList(newTasks);
                                }}
                            >删除</button></li>
                        </CSSTransition>
                    ))
                }
            </TransitionGroup>
            <button onClick={() => {
                var name = window.prompt("请输入任务名称");
                setTasksList([...tasksList, { id: uuid(), name }])
            }}>添加一个任务</button>
        </div>

    )
}
