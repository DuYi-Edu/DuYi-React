import React from 'react'

export default function FuncDefault(props) {
    console.log(props);//已经完成了混合
    return (
        <div>
            a:{props.a}，b:{props.b}，c:{props.c}
        </div>
    )
}
//属性默认值
FuncDefault.defaultProps = {
    a: 1,
    b: 2,
    c: 3
}