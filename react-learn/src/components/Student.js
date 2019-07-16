import React from 'react'

export default function Student(props) {
    //假设，所有的学生信息，都是分开传递的
    return (
        <li>
            {/* 显示一个学生的所有数据 */}
            【姓名】{props.name}，
            【email】{props.email}，
            【性别】{props.sex === 1 ? "男" : "女"}，
            【出生年份】{props.birth}
        </li>
    )
}
