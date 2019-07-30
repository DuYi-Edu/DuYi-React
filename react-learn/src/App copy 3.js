import React, { useState } from 'react'

export default function App() {
    console.log("App Render");
    const [visible, setVisible] = useState(true);
    const [n, setN] = useState(0);
    return <div>
        <p style={{ display: visible ? "block" : "none" }}>
            <button onClick={() => {
                setN(n - 1)
            }}>-</button>
            <span>{n}</span>
            <button onClick={() => {
                setN(n + 1)
            }}>+</button>
        </p>
        <button onClick={() => {
            setVisible(!visible);
        }}>显示/隐藏</button>
    </div>
}
