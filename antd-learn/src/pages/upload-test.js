import React, { useState } from 'react'
import Avatar from '../components/Avatar'
import { Button } from "antd"

export default function UploadTest() {
    const [imgUrl, setImgUrl] = useState("https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=4250680660,3927538037&fm=26&gp=0.jpg")
    return (
        <div>
            <Avatar
                value={imgUrl} //图片地址
                onChange={newValue => { //图片地址改变事件
                    setImgUrl(newValue);
                }}
            />
        </div>
    )
}
