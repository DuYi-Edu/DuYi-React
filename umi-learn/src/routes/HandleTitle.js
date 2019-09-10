import React from 'react'

export default function HandleTitle(props) {
    document.title = props.route.title;
    return props.children
}
