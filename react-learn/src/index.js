import React from 'react';
import ReactDOM from 'react-dom';
import App from "./App"

ReactDOM.render(<App />, document.getElementById('root'));
document.addEventListener("click", function(e){
    e.stopImmediatePropagation();//阻止剩余的事件处理程序运行
})

document.addEventListener("click", function (e) {
    console.log("真实DOM：document 被点击了");
})