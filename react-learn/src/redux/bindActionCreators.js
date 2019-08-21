export default function (actionCreators, dispatch) {
    if (typeof actionCreators === "function") {
        return getAutoDispatchActionCreator(actionCreators, dispatch);
    }
    else if (typeof actionCreators === "object") {
        const result = {}; //返回结果
        for (const key in actionCreators) {
            if (actionCreators.hasOwnProperty(key)) {
                const actionCreator = actionCreators[key]; //取出对应的属性值
                if (typeof actionCreator === "function") {
                    result[key] = getAutoDispatchActionCreator(actionCreator, dispatch);
                }
            }
        }
        return result;
    }
    else {
        throw new TypeError("actionCreators must be an object or function which means action creator")
    }
}

/**
 * 得到一个自动分发的action创建函数
 */
function getAutoDispatchActionCreator(actionCreator, dispatch) {
    return function (...args) {
        const action = actionCreator(...args)
        dispatch(action);
    }
}