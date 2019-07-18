import React, { Component } from 'react'

export default class FormTest extends Component {

    state = {
        loginId: "",
        loginPwd: "",
        sex: "male",
        chooseLoves: [],
        loves: [
            { value: "football", text: "足球" },
            { value: "basetball", text: "篮球" },
            { value: "movie", text: "电影" },
            { value: "music", text: "音乐" },
            { value: "other", text: "其他" },
        ],
        city: "beijing"
    }

    handleChange = e => {
        let val = e.target.value; //读取表单的值
        let name = e.target.name; //读取表单的name属性
        if (e.target.type === "checkbox") {
            //对val进行特殊处理
            if (e.target.checked) {
                val = [...this.state.chooseLoves, val];
            }
            else {
                val = this.state.chooseLoves.filter(it => it !== val);
            }
        }
        // const newPartialState = {};
        // newPartialState[name] = val;
        // this.setState(newPartialState)
        this.setState({
            [name]: val
        })
    }

    /**
     * 获取所有的爱好多选框
     */
    getLoveCheckBoxes() {
        const bs = this.state.loves.map(it => (
            <label key={it.value} >
                <input type="checkbox" name="chooseLoves"
                    value={it.value}
                    checked={this.state.chooseLoves.includes(it.value)}
                    onChange={this.handleChange}
                />
                {it.text}
            </label>
        ));
        return bs;
    }

    render() {
        const bs = this.getLoveCheckBoxes();
        return (
            <div>
                <p>
                    <input type="text"
                        name="loginId"
                        value={this.state.loginId}
                        onChange={this.handleChange} />
                </p>
                <p>
                    <input type="password"
                        name="loginPwd"
                        value={this.state.loginPwd}
                        onChange={this.handleChange} />
                </p>
                <p>
                    <label>
                        <input type="radio" name="sex"
                            value="male"
                            checked={this.state.sex === "male"}
                            onChange={this.handleChange}
                        />
                        男
                    </label>

                    <label>
                        <input type="radio" name="sex"
                            value="female"
                            checked={this.state.sex === "female"}
                            onChange={this.handleChange}
                        />
                        女
                    </label>
                </p>
                <p>
                    {bs}
                </p>
                <p>
                    <select name="city" value={this.state.city}
                        onChange={this.handleChange}
                    >
                        <option value="beijing">北京</option>
                        <option value="shanghai">上海</option>
                        <option value="chengdu">成都</option>
                    </select>
                </p>
                <p>
                    <button onClick={() => {
                        console.log(this.state)
                    }}>获取表单数据</button>
                </p>
            </div>
        )
    }
}
