import React from 'react'

export default function Detail(props) {
    console.log(props)
    return (
        <div>

            <h2>{props.match.params.name}</h2>
            <h2>
                {props.match.params.id}
            </h2>
        </div>
    )
}
