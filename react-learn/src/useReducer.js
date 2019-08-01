import { useState } from "react"
/**
 * 通用的useReducer函数
 * @param {function} reducer reducer函数，标准格式
 * @param {any} initialState 初始状态
 * @param {function} initFunc 用于计算初始值的函数
 */
export default function useReducer(reducer, initialState, initFunc) {
    const [state, setState] = useState(initFunc? initFunc(initialState): initialState)

    function dispatch(action) {
        const newState = reducer(state, action)
        console.log(`日志：n的值  ${state}->${newState}`)
        setState(newState);
    }

    return [state, dispatch];
}