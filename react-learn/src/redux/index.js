import { createStore, bindActionCreators } from "redux";
import * as actionTypes from "./action/action-type"
import * as numberActions from "./action/number-action"


//假设仓库中仅存放了一个数字，该数字的变化可能是+1或-1
//约定action的格式：{type:"操作类型", payload:附加数据}

/**
 * reducer本质上就是一个普通函数
 * @param state 之前仓库中的状态（数据）
 * @param action 描述要作什么的对象
 */
function reducer(state, action) {
    //返回一个新的状态
    if (action.type === actionTypes.INCREASE) {
        return state + 1;
    }
    else if (action.type === actionTypes.DECREASE) {
        return state - 1;
    }
    else if (action.type === actionTypes.SET) {
        return action.payload;
    }
    return state;//如果是一个无效的操作类型，数据不变
}

const store = createStore(reducer, 10);

//第一个参数，是action创建函数合并的对象，第二个参数是仓库的dispatch函数
//得到一个新的对象，新对象中的属性名与第一个参数的属性名一致
const boundActions = bindActionCreators(numberActions, store.dispatch);

console.log(store.getState()); //得到仓库中当前的数据

//得到一个increase action，并直接分发
boundActions.getIncreaseAction(); //向仓库分发action

console.log(store.getState()); //得到仓库中当前的数据

boundActions.getSetAction(3);

console.log(store.getState()); //得到仓库中当前的数据