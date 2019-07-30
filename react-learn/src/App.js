import React, { useState } from 'react'


export default function App() {
    console.log("App render")
    const [n, setN] = useState(0); //使用一个状态，该状态的默认值是0
    return <div>
        <button onClick={() => {
            // setN(n - 1);
            // setN(n - 1);
            setN(prevN => prevN - 1); //传入的函数，在事件完成之后统一运行
            setN(prevN => prevN - 1);
        }}>-</button>
        <span>{n}</span>
        <button onClick={() => {
            // setN(n + 1) //不会立即改变，事件运行完成之后一起改变
            // setN(n + 1) //此时，n的值仍然是0

            setN(prevN => prevN + 1); //传入的函数，在事件完成之后统一运行
            setN(prevN => prevN + 1);
        }}>+</button>
    </div>
}
