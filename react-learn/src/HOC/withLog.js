import React from "react"

/**
 * 高阶组件
 * @param {*} comp 组件
 */
export default function withLog(Comp, str) {
    return class LogWrapper extends React.Component {

        componentDidMount() {
            console.log(`日志：组件${Comp.name}被创建了！${Date.now()}`);
        }

        componentWillUnmount() {
            console.log(`日志：组件${Comp.name}被销毁了！${Date.now()}`);
        }


        render() {
            return (
                <>
                    <h1>{str}</h1>
                    <Comp {...this.props} />
                </>
            )
        }
    }
}
