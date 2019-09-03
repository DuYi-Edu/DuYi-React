// import { createActions } from "redux-actions"

function createActions(mapToActionCreators) {
    const result = {};
    for (const prop in mapToActionCreators) {
        const payloadCreator = mapToActionCreators[prop]; //取出属性值
        const newPropName = toSmallCamel(prop); //得到一个小驼峰命名的属性名
        const actionCreator = (...args) => {
            if (typeof payloadCreator === "function") {
                return {
                    type: prop,
                    payload: payloadCreator(...args)
                }
            }
            else {
                return {
                    type: prop
                }
            }
        }
        actionCreator.toString = function(){
            return prop;
        }
        result[newPropName] = actionCreator
    }
    return result;
}
//得到小驼峰命名法
function toSmallCamel(str) {
    // ASYNC_INCREASE ->  ["ASYNC", "INCREASE"] -> ["async", "Increase"] -> "asyncIncrease"
    return str.split("_").map((s, i) => {
        s = s.toLowerCase();
        if (i !== 0 && s.length >= 1) {
            s = s[0].toUpperCase() + s.substr(1);
        }
        return s;
    }).join("")
}

export const actionTypes = {
    increase: "INCREASE",
    decrease: "DECREASE",
    asyncIncrease: "ASYNC_INCREASE", //异步增加
    asyncDecrease: "ASYNC_DECREASE", //异步减少
    add: "ADD"
}

const actions = createActions({
    INCREASE: null,
    DECREASE: null,
    ASYNC_INCREASE: null,
    ASYNC_DECREASE: null,
    ADD: number => number
});

console.log(actions);

export const { increase, decrease, asyncIncrease, asyncDecrease, add } = actions



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