import MouseListener from "./MouseListener";
import React from 'react'

const renderPoint = mouse => <>横坐标：{mouse.x}，纵坐标：{mouse.y}</>
const renderDiv = mouse => <>
    <div style={{
        width: 100,
        height: 100,
        background: "#008c8c",
        position: "absolute",
        left: mouse.x - 50,
        top: mouse.y - 50
    }}>

    </div>
</>

export default function Test() {
    return (
        <div>
            <MouseListener render={renderPoint} />
            <MouseListener render={renderDiv} />
        </div>
    )
}
