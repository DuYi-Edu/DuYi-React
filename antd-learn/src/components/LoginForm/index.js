import React, { useRef } from 'react'
import styles from "./index.css"

export default function index(props) {
    const txtLoginId = useRef();
    const txtLoginPwd = useRef();
    return (
        <div className={styles.login}>
            <div className={styles.item}>
                <label>账号：</label>
                <input ref={txtLoginId} type="text" />
            </div>
            <div className={styles.item}>
                <label>密码：</label>
                <input ref={txtLoginPwd} type="password" />
            </div>
            <div className={styles.item}>
                <button onClick={() => {
                    var loginId = txtLoginId.current.value;
                    var loginPwd = txtLoginPwd.current.value;
                    props.onLogin && props.onLogin(loginId, loginPwd);
                }}>登录</button>
            </div>
        </div>
    )
}
