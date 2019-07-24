import React from 'react'
var prev;
export default function App() {
    return <div onClick={e => {
        console.log(prev === e);
        console.log("react: div被点击了")
    }}>
        <input type="text" onFocus={e => {
            console.log("react：文本获得了焦点")
        }} />
        <button onClick={e => {
            console.log("react: 按钮被点击了");
            prev = e;
            e.persist()
            setTimeout(() => {
                console.log(e.type);
            }, 1000);
            // e.nativeEvent.stopImmediatePropagation()
            // console.log(e.isPropagationStopped());
            // e.stopPropagation();
            // console.log(e.isPropagationStopped());
        }}>按钮</button>
    </div>
}

document.querySelector("#root").onFocus = function(e){
    console.log("阻止focus事件冒泡")
    e.stopPropagation();
}
