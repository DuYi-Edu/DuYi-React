import React from 'react'
import { getAllStudents } from "./services/student"

function withAllStudents(Comp) {
    return class AllStudentsWrapper extends React.Component {

        state = {
            stus: []
        }

        async componentDidMount() {
            const stus = await getAllStudents();
            this.setState({
                stus
            })
        }

        render() {
            return <Comp {...this.props} stus={this.state.stus} />
        }

    }
}

function Test(props) {
    const list = props.stus.map(it => <li key={it.id}>{it.name}</li>)
    return <ul>
        {list}
    </ul>
}

const TestStudents = withAllStudents(Test)

export default function App() {
    return (
        <div>
            <TestStudents />
        </div>
    )
}
