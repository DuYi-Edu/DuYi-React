import React from 'react'
import ErrorBound from "./components/common/ErrorBound"

function Comp1() {
    return <div style={{
        width: "90%",
        height: 500,
        border: "2px solid"
    }}>
        <h1>Comp1</h1>
        <Comp2 />
    </div>
}

function getDatas() {
    return;
}

function Comp2() {
    const datas = getDatas();
    const spans = datas.map(it => <span>某一项</span>)
    return <div style={{
        width: "70%",
        height: "70%",
        border: "2px solid"
    }}>
        {spans}
        <h1>Comp2</h1>
    </div>
}

function Comp3() {
    return <div style={{
        width: "90%",
        height: 500,
        border: "2px solid"
    }}>
        <h1>Comp3</h1>
    </div>
}

export default function App() {
    return <div>
        <ErrorBound>
            <Comp1 />
        </ErrorBound>
        <Comp3 />
    </div>
}
