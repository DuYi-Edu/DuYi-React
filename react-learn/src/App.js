import React from 'react'
import { A } from "./components/Comps";
import withLog from "./HOC/withLog";
let AComp = withLog(A);
export default class App extends React.Component {
    myRef = React.createRef();

    componentDidMount() {
        console.log(this.myRef);
    }
    
    
    render() {
        return (
            <div>
                <AComp ref={this.myRef} isLogin a={1} />
            </div>
        )
    }
}
