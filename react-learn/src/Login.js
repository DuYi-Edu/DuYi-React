import React from 'react'
import loginInfo from "./loginInfo"
// import qs from "query-string";

export default function Login(props) {
    return (
        <div>
            <h1>登录授权页</h1>
            <p>该页面仅作测试，点击下方按钮即登录成功</p>
            <button onClick={() => {
                loginInfo.login();
                if(props.location.state){
                    props.history.push(props.location.state);
                }
                else{
                    props.history.push("/");
                }
                // const query = qs.parse(props.location.search);
                // if (query.returnurl) {
                //     props.history.push(query.returnurl);
                // }
                // else {
                //     props.history.push("/");
                // }
            }}>登录</button>
        </div>
    )
}
