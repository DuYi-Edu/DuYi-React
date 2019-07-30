import React from 'react'
import PropTypes from "prop-types";

/**
 * 学生列表的组件，纯展示组件，没有状态，从属性中获取数据用于显示
 */
export default function StudentList({ stus }) {
    const list = stus.map(it => (
        <li key={it.id}>{it.name}，{it.sex === 1 ? "男" : "女"}</li>
    ));
    return (
        <ul>
            {list}
        </ul>
    )
}

StudentList.defaultProps = {
    stus: []
}

StudentList.propTypes = {
    stus: PropTypes.array.isRequired
}
