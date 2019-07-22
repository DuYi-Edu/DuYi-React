import React from "react"

/**
 * 高阶组件
 * @param {*} comp 组件
 */
export default function withLog(Comp) {
    class LogWrapper extends React.Component {
        componentDidMount() {
            console.log(`日志：组件${Comp.name}被创建了！${Date.now()}`);
        }
        componentWillUnmount() {
            console.log(`日志：组件${Comp.name}被销毁了！${Date.now()}`);
        }
        render() {
            //正常的属性
            //forwardRef代表要转发的ref  {current:null}
            const { forwardRef, ...rest } = this.props;
            return (
                <>
                    <Comp ref={forwardRef} {...rest} />
                </>
            )
        }
    }

    return React.forwardRef((props, ref) => {
        return <LogWrapper {...props} forwardRef={ref} />
    })
}
