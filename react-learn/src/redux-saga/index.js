import runSaga from "./runSaga"

/**
 * 创建saga中间件的函数
 */
export default function () {

    function sagaMiddleware(store) {
        const env = {
            store
        }
        sagaMiddleware.run = runSaga.bind(null, env);
        return function (next) {
            return function (action) {
                return next(action); //直接交给下一个中间件处理
            }
        }
    }
    return sagaMiddleware;

}