import React from 'react'
import { getAllStudents } from "./services/student"

class AllStudents extends React.Component {

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
        if (typeof this.props.render === "function") {
            return this.props.render(this.state.stus);
        }
        return null;
    }

}

function Test(props) {
    const list = props.stus.map(it => <li key={it.id}>{it.name}</li>)
    return <ul>
        {list}
    </ul>
}


export default function App() {
    return (
        <div>
            <AllStudents render={stus => <Test stus={stus} />} />
        </div>
    )
}
