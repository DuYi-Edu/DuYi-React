import { createAction } from "redux-actions"

export const actionTypes = {
    increase: "INCREASE",
    decrease: "DECREASE",
    asyncIncrease: "ASYNC_INCREASE", //异步增加
    asyncDecrease: "ASYNC_DECREASE", //异步减少
    add: "ADD"
}

// function createAction(type, payloadCreator) {
//     return function actionCreator(...args) {
//         if (typeof payloadCreator === "function") {
//             const payload = payloadCreator(...args)
//             return {
//                 type,
//                 payload
//             }
//         }
//         else {
//             return {
//                 type
//             }
//         }
//     }
// }

export const increase = createAction(actionTypes.increase);
export const decrease = createAction(actionTypes.decrease);
export const asyncIncrease = createAction(actionTypes.asyncIncrease);
export const asyncDecrease = createAction(actionTypes.asyncDecrease);
export const add = createAction(actionTypes.add, number => number, () => ({ isAdmin: true }));

// export function add(number) {
//     return { type: actionTypes.add, payload: number }
// }
