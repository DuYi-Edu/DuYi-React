import React, { useState, useMemo } from 'react'

function Item(props) {
    // console.log("Item Render " + props.value);
    return <li>{props.value}</li>
}


export default function App() {
    const [range,] = useState({ min: 1, max: 10000 })
    const [n, setN] = useState(0)
    const list = useMemo(() => {
        const list = [];
        for (let i = range.min; i <= range.max; i++) {
            list.push(<Item key={i} value={i}></Item>)
        }
        return list;
    }, [range.min, range.max])
    // const list = [];
    // for (let i = range.min; i <= range.max; i++) {
    //     list.push(<Item key={i} value={i}></Item>)
    // }
    return (
        <div>
            <ul>
                {list}
            </ul>
            <input type="number"
                value={n}
                onChange={e => {
                    setN(parseInt(e.target.value))
                }}
            />
        </div>

    )
}
