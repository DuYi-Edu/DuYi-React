import React from 'react'

export default function Comp(props) {
    console.log(props);
    return (
        <div className="comp">
            <h1>组件自身的内容</h1>
            {/* {props.children || <h1>默认值</h1>} */}
            {props.children}
            {props.content1}
            {props.content2}
        </div>
    )
}
