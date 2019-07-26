import React, { Component } from 'react'


export default class App extends Component {
    state = {
        isReg: false //是否是注册
    }
    render() {
        return (
            <div>
                <button onClick={() => {
                    this.setState({
                        isReg: !this.state.isReg
                    })
                }}>登录/注册</button>
                {
                    this.state.isReg ?
                        (<div className="reg">
                            <p>
                                账号：<input key="reg" type="text" />
                            </p>
                            <p>
                                密码：<input key="reg" type="password" />
                            </p>
                            <p>
                                确认密码：<input type="password" />
                            </p>
                            <p>
                                <button>注册</button>
                            </p>
                        </div>) :
                        (<div className="login">
                            <p>
                                账号：<input key="login" type="text" />
                            </p>
                            <p>
                                密码：<input key="login" type="password" />
                            </p>
                            <p>
                                <button>登录</button>
                            </p>
                        </div>)
                }
            </div>
        )
    }
}
