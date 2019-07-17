import React from 'react'
import ReactDOM from 'react-dom'

function handleClick(e) {
    console.log("点击了！！！", e)
}

const btn = <button onClick={handleClick} onMouseEnter={(e)=>{
    console.log("鼠标移入了", e)
}}>点击</button>;

ReactDOM.render(btn, document.getElementById("root"));