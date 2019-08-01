import React, { useState, useMemo } from 'react'

class Test extends React.PureComponent {

    render() {
        console.log("Test Render")
        return <div>
            <h1>{this.props.text}</h1>
            <button onClick={this.props.onClick}>改变文本</button>
        </div>
    }
}

function Parent() {
    console.log("Parent Render")
    const [txt, setTxt] = useState(1)
    const [n, setN] = useState(0)
    const handleClick = useMemo(() => {
        return () => {
            setTxt(txt + 1)
        };
    }, [txt])

    return (
        <div>
            {/* 函数的地址每次渲染都发生了变化，导致了子组件跟着重新渲染，若子组件是经过优化的组件，则可能导致优化失效 */}
            <Test text={txt} onClick={handleClick} />
            <input type="number"
                value={n}
                onChange={e => {
                    setN(parseInt(e.target.value))
                }}
            />
        </div>
    )
}

export default function App() {

    return (
        <div>
            <Parent />
        </div>
    )
}
