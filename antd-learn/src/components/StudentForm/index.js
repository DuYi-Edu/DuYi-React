import React, { Component } from 'react'
import { Form, Spin, message, Input, Button, Radio, Switch, Select } from "antd"
import { addStudent, updateStudent, getStudentBySNo } from "@/services/student"
import Avatar from "../Avatar"
import withRouter from "umi/withRouter"

const spanConfig = {
    labelCol: {
        span: 2
    },
    wrapperCol: {
        span: 10
    }
}

class StudentForm extends Component {

    state = {
        isLoading: false
    }

    createOptions() {
        const options = [];
        for (var i = 1980; i <= 2010; i++) {
            options.push(<Select.Option key={i} value={i}>{i}年</Select.Option>)
        }
        return options;
    }

    async componentDidMount() {
        if (this.props.sNo) {
            this.setState({
                isLoading: true
            })
            const stu = await getStudentBySNo(this.props.sNo)
            //设置表单的值
            delete stu.id;
            delete stu.appkey;
            delete stu.ctime;
            delete stu.utime;

            this.props.form.setFields(getFieldsConfig(stu));
            this.setState({
                isLoading: false
            })
        }
    }


    async add(stuObj) {
        this.setState({
            isLoading: true
        })
        const resp = await addStudent(stuObj)
        if (resp.status === "success") {
            //添加成功
            //1. 先给提示
            await message.success("添加学生成功！！", 1);
            //2. 跳转页面  跳转到学生查询页
            this.props.history.push("/student");
        }
        else {
            //添加失败
            message.error(resp.msg, 3);
            this.setState({
                isLoading: false
            })
        }
    }

    async update(stuObj) {
        this.setState({
            isLoading: true
        })
        const resp = await updateStudent(stuObj)
        if (resp.status === "success") {
            //添加成功
            //1. 先给提示
            await message.success("修改学生成功！！", 1);
            //2. 跳转页面  跳转到学生查询页
            this.props.history.push("/student");
        }
        else {
            //添加失败
            message.error(resp.msg, 3);
            this.setState({
                isLoading: false
            })
        }

    }

    handleSubmit = (e) => {
        e.preventDefault(); //阻止表单默认行为：提交
        this.props.form.validateFields((err, values) => {
            if (!err) {
                // console.log(values)
                //验证通过
                if (this.props.sNo) {
                    //修改学生
                    this.update(values);
                }
                else {
                    this.add(values);
                }
            }
        })
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <Spin spinning={this.state.isLoading} tip="提交中，请稍后...">
                <Form {...spanConfig} onSubmit={this.handleSubmit}>
                    <Form.Item label="头像">
                        {getFieldDecorator("avatar")(<Avatar disabled={this.props.sNo !== undefined} />)}
                    </Form.Item>
                    <Form.Item label="学号">
                        {getFieldDecorator("sNo", {
                            rules: [
                                { required: true, message: "学号必须填写" }
                            ]
                        })(<Input disabled={this.props.sNo !== undefined} />)}
                    </Form.Item>
                    <Form.Item label="姓名">
                        {getFieldDecorator("name", {
                            rules: [
                                { required: true, message: "姓名必须填写" }
                            ]
                        })(<Input />)}
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


            </Spin>

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

export default withRouter(HOC(StudentForm))