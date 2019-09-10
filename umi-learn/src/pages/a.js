import React from 'react'
import router from "umi/router"
import A from "@/components/A"

export default function a(props) {
    return (
        <div>
            <h1>页面a</h1>
            <A />
            <button onClick={() => {
                router.push("/b")
            }}>跳转到b页面</button>
        </div>
    )
}
