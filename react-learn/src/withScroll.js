import React from "react"
import reset from "./resetScroll"
export default function withScroll(Comp) {
    return class ScrollWrapper extends React.Component {

        componentDidMount() {
            reset();
        }


        render() {
            return <Comp {...this.props} />
        }
    }
}