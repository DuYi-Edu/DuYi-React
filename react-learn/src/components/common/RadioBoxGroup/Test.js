import React, { Component } from 'react'
import RadioBoxGroup from "./index"
import { getAllStudents } from "../../../services/student"

export default class Test extends Component {
    state = {
        datas: [],
        value: ""
    }

    async componentDidMount() {
        const stus = await getAllStudents();
        this.setState({
            datas: stus.map(it => ({ value: it.id.toString(), text: it.name }))
        })
    }

    handleChange = val => {
        this.setState({
            value: val
        })
    }

    render() {
        return (
            <div>
                <RadioBoxGroup
                    name="loves"
                    {...this.state}
                    onChange={this.handleChange}
                />
            </div>
        )
    }
}
