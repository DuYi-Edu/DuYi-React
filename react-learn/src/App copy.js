import React from 'react'
import { A, B } from "./components/Comps";
import withLog from "./HOC/withLog";
import withLogin from "./HOC/withLogin"
let AComp = withLogin(withLog(A, "abc"));
let BComp = withLogin(withLog(B, "Bcd"));
export default class App extends React.Component {
    render() {
        return (
            <div>
                <AComp isLogin a={1} />
                <BComp isLogin b={1} />
                <button onClick={() => {
                    this.setState({})
                }}>点击</button>
            </div>
        )
    }
}
