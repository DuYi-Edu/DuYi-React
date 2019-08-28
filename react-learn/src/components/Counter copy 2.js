import React from 'react'
import { asyncDecrease, asyncIncrease, increase, decrease } from "../store/action/counter"
import { connect } from "react-redux"
//展示组件
function Counter(props) {
    return (
        <div>
            <h1>{props.number}</h1>
            <p>
                <button onClick={props.onAsyncDecrease}> 异步减 </button>
                <button onClick={props.onDecrease}> 减 </button>
                <button onClick={props.onIncrease}> 加 </button>
                <button onClick={props.onAsyncIncrease}> 异步加 </button>
            </p>
        </div>
    )
}

/**
 * 将整个仓库的状态，映射到当前需要的数据
 * @param {*} state 
 */
function mapStateToProps(state, ownProps) {
    console.log(ownProps)
    return {
        number: state.counter
    }
}

/**
 * 映射事件处理函数
 * @param {*} dispatch 
 */
function mapDispatchToProps(dispatch) {
    return {
        onAsyncDecrease() {
            dispatch(asyncDecrease())
        },
        onDecrease() {
            dispatch(decrease())
        },
        onIncrease() {
            dispatch(increase())
        },
        onAsyncIncrease() {
            dispatch(asyncIncrease())
        },
    }
}
// //connect返回一个高阶组件
// const hoc = connect(mapStateToProps, mapDispatchToProps)

// //传入展示组件，返回一个容器组件
// export default hoc(Counter)


export default connect(mapStateToProps, mapDispatchToProps)(Counter)