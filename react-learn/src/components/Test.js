import withMouseListener from "./withMouseListener";
import React from 'react'

function Point(props) {
    return <>横坐标：{props.x}，纵坐标：{props.y}</>
}

function MoveDiv(props) {
    return (
        <div style={{
            width: 100,
            height: 100,
            background: "#008c8c",
            position: "absolute",
            left: props.x - 50,
            top: props.y - 50
        }}>

        </div>);
}

const MousePoint = withMouseListener(Point);
const MouseDiv = withMouseListener(MoveDiv);

export default function Test() {
    return (
        <div>
            <MousePoint/>
            <MouseDiv/>
        </div>
    )
}
