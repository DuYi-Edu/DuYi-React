import React, { useState, useEffect } from 'react'

let n = 1;

function func1() {
    console.log("odd 副作用函数")
    return () => {
        console.log("odd 清理函数")
    }
}

function func2() {
    console.log("even 副作用函数")
    return () => {
        console.log("even 清理函数")
    }
}

export default function App() {
    const [, forceUpdate] = useState({})
    useEffect(n % 2 === 0 ? func2 : func1);
    n++;
    return (
        <div>
            <button onClick={() => {
                forceUpdate({});
            }}>强制刷新</button>
        </div>
    )
}
