import { createStore } from "redux";

//假设仓库中仅存放了一个数字，该数字的变化可能是+1或-1
//约定action的格式：{type:"操作类型", payload:附加数据}

/**
 * reducer本质上就是一个普通函数
 * @param state 之前仓库中的状态（数据）
 * @param action 描述要作什么的对象
 */
function reducer(state, action) {
    //返回一个新的状态
    if (action.type === "increase") {
        return state + 1;
    }
    else if (action.type === "decrease") {
        return state - 1;
    }
    return state;//如果是一个无效的操作类型，数据不变
}

window.store = createStore(reducer, 10);

const action = {
    type: "increase"
}

console.log(window.store.getState()); //得到仓库中当前的数据

window.store.dispatch(action); //向仓库分发action

console.log(window.store.getState()); //得到仓库中当前的数据