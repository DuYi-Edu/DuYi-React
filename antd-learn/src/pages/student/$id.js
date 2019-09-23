import React from 'react'

export default function $id({match}) {
    return (
        <div>
            <h1>学生详情页</h1>
            <p>
                学生的id：{match.params.id}
            </p>
        </div>
    )
}
