import React from 'react'
import useAllStudents from "./myHooks/useAllStudents"

function Test() {
    const stus = useAllStudents();
    const list = stus.map(it => <li key={it.id}>{it.name}</li>)
    return <ul>
        {list}
    </ul>
}

export default function App() {
    return (
        <div>
            <Test />
        </div>
    )
}
