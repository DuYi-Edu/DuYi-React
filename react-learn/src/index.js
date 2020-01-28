import React from 'react';
import ReactDOM from 'react-dom';
import App from "./App"

let num = 0;

setInterval(() => {
    num++;
    const div = (
        <div title="asdfadf">
            {num}
        </div>
    );
    ReactDOM.render(div, document.getElementById("root"));
}, 1000);
