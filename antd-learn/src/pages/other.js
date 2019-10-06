import React, { useState } from 'react'
import { Descriptions, Empty, Tooltip, Input, Modal, Button } from "antd"

export default function other() {

    const [visible, setVisible] = useState(false)
    return (
        <div>
            <Descriptions column={3} title="用户信息" bordered>
                <Descriptions.Item label="用户名">Zhou Maomao</Descriptions.Item>
                <Descriptions.Item label="电话">1810000000</Descriptions.Item>
                <Descriptions.Item label="住址">Hangzhou, Zhejiang</Descriptions.Item>
                <Descriptions.Item label="备注">empty</Descriptions.Item>
                <Descriptions.Item span={2} label="详细地址">
                    No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China
                </Descriptions.Item>
                <Descriptions.Item label="空状态" span={3}>
                    <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
                </Descriptions.Item>
                <Descriptions.Item label="文字提示" span={3}>
                    <Tooltip trigger="click" title="提示文本">
                        用鼠标指着我会显示提示
                    </Tooltip>
                    <Tooltip trigger="focus" placement="topLeft" title="请输入账号">
                        <Input />
                    </Tooltip>
                </Descriptions.Item>
                <Descriptions.Item label="对话框" span={3}>
                    <Button onClick={()=>{
                        setVisible(true)
                    }}>显示对话框</Button>

                    <Modal title="标题" visible={visible}
                        onOk={() => {
                            console.log("点击了确定")
                            setVisible(false)
                        }}
                        onCancel={() => {
                            console.log("点击了取消")
                            setVisible(false)
                        }}
                    >
                        <h1>想写啥写啥</h1>
                    </Modal>
                </Descriptions.Item>
            </Descriptions>


        </div>
    )
}
