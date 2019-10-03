import React, { useState } from 'react'
import styles from "./index.css"
import { Upload, Button, Spin } from "antd"

/**
 * 得到头像上传区域的内容
 */
function getAvatarContent(imgUrl) {
    if (imgUrl) {
        return <img src={imgUrl} className={styles.avatarimg} alt="" />
    }
    else {
        return <Button type="primary" icon="upload">上传头像</Button>
    }
}

function Avatar({ value, onChange }, ref) {
    const [loading, setLoading] = useState(false)
    //value表示图片地址
    return (
        <Upload
            ref={ref}
            listType="picture-card"
            showUploadList={false}
            action="/api/upload" //配置上传地址
            name="imagefile"
            accept=".jpg,.png,.gif,.bmp,.jiff"
            beforeUpload={() => {
                //发送服务器之前触发的事件
                setLoading(true);
            }}
            onChange={data => {
                if (data.file.response) {
                    //服务器完成了响应
                    onChange && onChange(data.file.response.path);
                    setLoading(false);
                }
            }}
        >
            <Spin spinning={loading}>
                <div className={styles.avatar}>
                    {getAvatarContent(value)}
                </div>
            </Spin>
        </Upload>
    )
}

export default React.forwardRef(Avatar);