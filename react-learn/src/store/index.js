// 用于创建仓库，并导出
import { createStore, applyMiddleware } from "redux"
import reducer from "./reducer"
import logger from "redux-logger"
import createSagaMiddleware from "../redux-saga"
import rootSaga from "./saga"

const sagaMid = createSagaMiddleware(); //创建一个saga的中间件

const store = createStore(reducer,
    applyMiddleware(sagaMid, logger)
)

sagaMid.run(rootSaga); //启动saga任务

export default store;