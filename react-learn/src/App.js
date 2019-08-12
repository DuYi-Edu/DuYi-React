import React, { useState } from "react";
import { Transition } from 'react-transition-group';
import "./App.css"
const duration = 2000;

export default function App() {
    const [inProp, setInProp] = useState(true);
    return (
        <div>
            <Transition in={inProp} timeout={duration}
                addEndListener={(node, done) => {
                    node.addEventListener("transitionend", () => {
                        console.log("过渡结束了")
                    }, { once: true })
                }}
            >
                {state => {
                    console.log(state);
                    return <div className={state}>
                        I'm a fade Transition!
                    </div>
                }}

            </Transition>
            <button onClick={() => setInProp(!inProp)}>
                Click to Toggle
            </button>
        </div>
    );
}