import { createActions } from "redux-actions"

export const actionTypes = {
    increase: "INCREASE",
    decrease: "DECREASE",
    asyncIncrease: "ASYNC_INCREASE", //异步增加
    asyncDecrease: "ASYNC_DECREASE", //异步减少
    add: "ADD"
}

export const {increase, decrease, asyncIncrease, asyncDecrease, add} = createActions({
    INCREASE: null,
    DECREASE: null,
    ASYNC_INCREASE: null,
    ASYNC_DECREASE: null,
    ADD: number => number
});
//actions:

/*
{
    increase: fn(),
    decrease: fn(),
    asyncIncrease: fn(),
    asyncDecrease: fn(),
    add: fn(number)
}

*/