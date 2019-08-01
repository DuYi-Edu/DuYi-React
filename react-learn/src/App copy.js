import React, { useState, useRef } from 'react'
window.arr = [];

export default function App() {
    const inpRef = useRef();
    window.arr.push(inpRef);
    const [n, setN] = useState(0)
    return (
        <div>
            <input ref={inpRef} type="text" />
            <button onClick={() => {
                console.log(inpRef.current.value)
            }}>得到input的值</button>

            <input type="number"
                value={n}
                onChange={e => {
                    setN(e.target.value)
                }} />
        </div>
    )
}
