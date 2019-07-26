import React, { PureComponent } from 'react'
import { getAllStudents } from "./services/student"

class StudentList extends PureComponent {
    render() {
        const stus = this.props.stuList.map(it => <Student key={it.id} {...it} />)
        return <ul>
            {stus}
        </ul>
    }
}

class Student extends PureComponent {
    render() {
        return <li>
            {
                this.props.sex === 1 ? (
                    <>
                        <i>{this.props.name}</i>
                        <i>{this.props.birth}</i>
                        <i>{this.props.address}</i>
                        <i>{this.props.email}</i>
                        <i>{this.props.phone}</i>
                        <i>{this.props.sex}</i>
                    </>
                ) : (
                        <>
                            <span>{this.props.name}</span>
                            <span>{this.props.birth}</span>
                            <span>{this.props.address}</span>
                            <span>{this.props.email}</span>
                            <span>{this.props.phone}</span>
                            <span>{this.props.sex}</span>
                        </>
                    )
            }

        </li>
    }
}

export default class App extends PureComponent {

    state = {
        stuList: []
    }

    loadStudents = async () => {
        const stus = await getAllStudents();
        this.setState({
            stuList: stus
        });
    }

    render() {
        return (
            <div>
                <button onClick={this.loadStudents}>加载学生数据</button>
                <button onClick={() => {
                    this.setState({
                        stuList: []
                    })
                }}>清空数据</button>
                <button onClick={() => {
                    this.setState({
                        stuList: [...this.state.stuList.sort(() => Math.random() - 0.5)]
                    })
                }}>打乱顺序</button>
                {/* 显示学生集合 */}
                <StudentList stuList={this.state.stuList} />
            </div>
        )
    }
}
