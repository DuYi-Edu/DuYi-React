import React, { Component } from 'react'
// import NumberInput from "./components/NumberInput"

export default class App extends Component {

    state = {
        val: "123",
        // checked: true
        loves: ["足球", "篮球", "音乐", "其他"],
        chooseLoves: ["篮球", "音乐"],
        selVal: "beijing"
    }

    render() {
        // const checkboxes = this.state.loves.map(it => (<label key={it}>
        //     <input
        //         type="checkbox"
        //         checked={this.state.chooseLoves.includes(it)}
        //         onChange={e => {
        //             if (e.target.checked) {
        //                 this.setState({
        //                     chooseLoves: [...this.state.chooseLoves, it]
        //                 })
        //             }
        //             else {
        //                 this.setState({
        //                     chooseLoves: this.state.chooseLoves.filter(l => l !== it)
        //                 })
        //             }
        //         }}
        //     />
        //     {it}
        // </label>))
        return (
            <div>
                {/* 默认情况下，它是一个非受控组件 */}
                {/* <input type="text" /> */}

                {/* <input type="text" value={this.state.val} onChange={e => {
                    this.setState({
                        val: e.target.value
                    })
                }} /> */}

                {/* <button onClick={() => {
                    console.log(this.state.val);
                }}>获取文本框的值</button> */}

                {/* <NumberInput /> */}

                {/* {checkboxes} */}

                {/* <button onClick={() => {
                    console.log(this.state.chooseLoves)
                }}>获取选中的值</button> */}

                <select value={this.state.selVal} onChange={e => {
                    this.setState({
                        selVal: e.target.value
                    })
                }}>
                    <option value="beijing">北京</option>
                    <option value="shanghai">上海</option>
                    <option value="shenzheng">深证</option>
                </select>
            </div>
        )
    }
}
