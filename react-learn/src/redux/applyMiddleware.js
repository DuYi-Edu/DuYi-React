import compose from "./compose"
/**
 * 注册中间件
 * @param  {...any} middlewares 所有的中间件
 */
export default function (...middlewares) {
    return function (createStore) { //给我创建仓库的函数
        //下面的函数用于创建仓库
        return function (reducer, defaultState) {
            //创建仓库
            const store = createStore(reducer, defaultState);
            let dispatch = () => { throw new Error("目前还不能使用dispatch") };
            const simpleStore = {
                getState: store.getState,
                dispatch: store.dispatch
            }
            //给dispatch赋值
            //根据中间件数组，得到一个dispatch创建函数的数组
            const dispatchProducers = middlewares.map(mid => mid(simpleStore));
            dispatch = compose(...dispatchProducers)(store.dispatch);
            return {
                ...store,
                dispatch
            }
        }
    }
}