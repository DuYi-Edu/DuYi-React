import React, { useState } from 'react'
import { Typography } from "antd"

const { Title, Paragraph } = Typography;
export default function article() {
    const [txt, setTxt] = useState("可编辑的内容")
    return (
        <div>
            <Title>下面的内容是可以编辑的</Title>
            <Paragraph editable={{
                onChange: (newTxt) => {
                    setTxt(newTxt);
                }
            }}>
                {txt}
            </Paragraph>

        </div>
    )
}
