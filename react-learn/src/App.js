import React, { useState } from 'react'
import useTimer from "./myHooks/useTimer"
function Test(props) {
    useTimer(() => {
        console.log("Test组件的一些副作用操作")
    }, 1000);
    return <h1>Test组件</h1>
}


export default function App() {
    const [visible, setVisible] = useState(true)
    return (
        <div>
            {
               visible && <Test />
            }
            <button onClick={()=>{
                setVisible(!visible);
            }}>隐藏/显示</button>
        </div>
    )
}
