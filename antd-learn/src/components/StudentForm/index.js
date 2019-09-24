import React, { Component } from 'react'
import { Form, Input, Button, Radio, Switch, Select } from "antd"

const spanConfig = {
    labelCol: {
        span: 2
    },
    wrapperCol: {
        span: 10
    }
}

class StudentForm extends Component {

    createOptions() {
        const options = [];
        for (var i = 1980; i <= 2010; i++) {
            options.push(<Select.Option key={i} value={i}>{i}年</Select.Option>)
        }
        return options;
    }

    handleSubmit = (e) => {
        e.preventDefault(); //阻止表单默认行为：提交
        this.props.form.validateFields((err, values) => {
            if (!err) {
                //验证通过
                console.log(values);
            }
        })
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <Form {...spanConfig} onSubmit={this.handleSubmit}>
                <Form.Item label="学号">
                    {getFieldDecorator("sNo", {
                        rules: [
                            { required: true, message: "学号必须填写" }
                        ]
                    })(<Input />)}
                </Form.Item>
                <Form.Item label="姓名">
                    {getFieldDecorator("name", {
                        rules: [
                            { required: true, message: "姓名必须填写" }
                        ]
                    })(<Input.Password />)}
                </Form.Item>
                <Form.Item label="性别">
                    {getFieldDecorator("sex", {
                        rules: [
                            { required: true, message: "请选择姓别" }
                        ]
                    })(<Radio.Group>
                        <Radio.Button value={0}>男</Radio.Button>
                        <Radio.Button value={1}>女</Radio.Button>
                    </Radio.Group>)}
                </Form.Item>
                <Form.Item label="班长">
                    {getFieldDecorator("isMonitor", {
                        valuePropName: "checked"
                    })(<Switch />)}
                </Form.Item>
                <Form.Item label="出生年份">
                    {getFieldDecorator("birth", {
                        rules: [
                            { required: true, message: "请选择出生年份" }
                        ]
                    })(<Select>
                        {this.createOptions()}
                    </Select>)}
                </Form.Item>
                <Form.Item label="手机号">
                    {getFieldDecorator("phone", {
                        rules: [
                            { required: true, message: "请填写手机号" },
                            { pattern: /1\d{10}/, message: "手机号格式不正确" },
                        ]
                    })(<Input />)}
                </Form.Item>
                <Form.Item label="住址">
                    {getFieldDecorator("address", {
                        rules: [
                            { required: true, message: "请填写住址" }
                        ]
                    })(<Input />)}
                </Form.Item>
                <Form.Item label="邮箱">
                    {getFieldDecorator("email", {
                        rules: [
                            { required: true, message: "请填写邮箱" },
                            { pattern: /\w+@\w+(\.\w+){1,2}/, message: "邮箱格式不正确" },
                        ]
                    })(<Input />)}
                </Form.Item>
                <Form.Item wrapperCol={{
                    offset: 2
                }}>
                    <Button htmlType="submit" type="primary">提交</Button>
                </Form.Item>
            </Form>
        )
    }
}

function getFieldsConfig(obj) {
    const result = {};
    for (const prop in obj) {
        result[prop] = Form.createFormField({
            value: obj[prop]
        })
    }
    return result;
}

const HOC = Form.create({
    mapPropsToFields: props => getFieldsConfig({
        sex: 0,
        isMonitor: false
    })
})

export default HOC(StudentForm)