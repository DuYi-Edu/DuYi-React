import React from 'react'
import ThreeLayout from "./components/common/ThreeLayout"

export default function App() {
    return (
        <div>
            <ThreeLayout
                gap={50}
                left={<div style={{
                    border:"2px solid #008c8c"
                }}>
                    左边栏
                </div>}
                right={<div style={{
                    border:"2px solid #008c8c"
                }}>
                    右边栏
                </div>}
            >
                <div style={{
                    border:"2px solid #f40"
                }}>
                    <h1>主区域</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit officia harum eveniet doloribus temporibus, eaque, nisi ex debitis quisquam assumenda repudiandae architecto. Magnam sunt, distinctio consectetur cum exercitationem asperiores esse?
                    </p>
                </div>
            </ThreeLayout>
        </div>
    )
}
