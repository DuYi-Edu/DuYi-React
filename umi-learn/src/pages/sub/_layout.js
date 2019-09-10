import React from 'react'

export default function layout(props) {
    return (
        <div>
            <div>
                <h1>sub页面的通用子菜单</h1>
            </div>
            {props.children} 
        </div>
    )
}
