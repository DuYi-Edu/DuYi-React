/**
 * title: 欢迎页
 * Routes:
 *      - ./src/routes/PrivateRouter.js
 *      - ./src/routes/HandleTitle.js
 */

import React from 'react'

export default function welcome({ history }) {
    const loginId = localStorage.getItem("loginId");
    return (
        <div>
            欢迎你，{loginId}
            <p>
                <button onClick={() => {
                    localStorage.removeItem("loginId");
                    history.push("/login");
                }}>注销</button>
            </p>
        </div>
    )
}
