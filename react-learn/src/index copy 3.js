import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css";

const url = "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2962719555,3613138778&fm=27&gp=0.jpg";
const cls = "image";
const div = (
    <div>
        <img src={url} className={cls} style={{
            marginLeft: "50px",
            width:"200px"
        }} alt="" />
    </div>
);

ReactDOM.render(div, document.getElementById("root"));