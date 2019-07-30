import React, { useState } from 'react'

// class App extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             n: 0
//         }
//     }

//     render() {
//         return <div>
//             <button onClick={() => {
//                 this.setState({
//                     n: this.state.n - 1
//                 })
//             }}>-</button>
//             <span>{this.state.n}</span>
//             <button onClick={() => {
//                 this.setState({
//                     n: this.state.n + 1
//                 })
//             }}>+</button>
//         </div>
//     }
// }


export default function App() {
    // const arr = useState(0); //使用一个状态，该状态的默认值是0
    // const n = arr[0]; //得到状态的值
    // const setN = arr[1]; //得到一个函数，该函数用于改变状态
    const [n, setN] = useState(0); //使用一个状态，该状态的默认值是0
    return <div>
        <button onClick={() => {
            setN(n - 1)
        }}>-</button>
        <span>{n}</span>
        <button onClick={() => {
            setN(n + 1)
        }}>+</button>
    </div>
}
