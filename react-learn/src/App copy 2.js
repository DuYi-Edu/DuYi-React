import React, { useState, useEffect } from 'react'
const ref = React.createRef();
window.timer = null; //计时器ID

function stop() {
    clearInterval(window.timer); //清空之前的计时器
    window.timer = null;
}
/**
 * 一个可移动的块，该组件每次渲染完成后，始终从0，0坐标在10秒钟内，移动到目标点坐标
 * @param {*} props 
 * props.left，要移动到的目标点横坐标
 * props.top，要移动到的目标点纵坐标
 */
function MovableBlock(props) {
    useEffect(() => {
        //渲染完成后
        const div = ref.current;
        let curTimes = 0; //当前移动的次数
        const disX = props.left / 1000; //横坐标上每次移动的距离
        const disY = props.top / 1000; //纵坐标上每次移动的距离
        window.timer = setInterval(() => {
            curTimes++;//移动次数+1
            const newLeft = curTimes * disX;
            const newTop = curTimes * disY;
            div.style.left = newLeft + "px";
            div.style.top = newTop + "px";
            if (curTimes === 1000) {
                stop();
            }
        }, 10)
        return stop; //直接使用stop作为清理函数
    })

    return <div ref={ref} style={{
        width: 100,
        height: 100,
        left: 0,
        top: 0,
        position: "fixed",
        background: "#f40"
    }}>

    </div>
}

export default function App() {
    const [point, setPoint] = useState({ x: 0, y: 0 })
    const [visible, setVisible] = useState(true)
    return (
        <div style={{
            paddingTop: 200
        }}>
            {
                visible && (
                    <div>
                        x: <input type="number" value={point.x} onChange={e => {
                            setPoint({
                                ...point,
                                x: parseInt(e.target.value)
                            })
                        }} />
                        y: <input type="number" value={point.y} onChange={e => {
                            setPoint({
                                ...point,
                                y: parseInt(e.target.value)
                            })
                        }} />
                        <MovableBlock left={point.x} top={point.y} />
                    </div>
                )
            }

            <button onClick={() => {
                setVisible(!visible);
            }}>显示/隐藏</button>

        </div>
    )
}
