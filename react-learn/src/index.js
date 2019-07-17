import React from 'react'
import ReactDOM from 'react-dom'
import TickControl from "./TickControl";

const tc = new TickControl();
console.log(tc);

ReactDOM.render(<TickControl/>, document.getElementById("root"));