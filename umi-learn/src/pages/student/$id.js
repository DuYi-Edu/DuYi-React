import React from 'react'

export default function $id(props) {
    return (
        <div>
            <h1>修改学生页</h1>
            <h1>学生学号：{props.match.params.id}</h1>
        </div>
    )
}
