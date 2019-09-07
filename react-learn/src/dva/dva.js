import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import { createStore, combineReducers, applyMiddleware } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"

/**
 * 创建dva对象的函数
 * @param {*} opts 配置
 */
export default function (opts = {}) {
    var app = {
        model,
        _models: [], //记录已经定义的模型
        router,
        _router: null, //用于记录路由函数
        start
    }
    return app;

    /**
     * 根据模型对象定义一个模型
     * @param {*} modelObj 
     */
    function model(modelObj) {
        app._models.push(modelObj);
    }

    /**
     * 传入一个路由函数，该函数返回路由配置
     * @param {*} routerFunc 
     */
    function router(routerFunc) {
        app._router = routerFunc;
    }

    function start(selector) {
        const store = getStore();
        render(selector, store);
    }

    function getMiddlewares() {
        return composeWithDevTools(applyMiddleware());
    }

    /**
     * 得到一些额外的reducer，会合并到根reducer中去
     */
    function getExtraReducers() {
        return {
            routing(state = null, action) {
                return state;
            },
            /* eslint-disable */
            ["@@dva"](state = 0, action) {
                return state;
            }
        }
    }

    /**
     * 得到一个redux仓库
     */
    function getStore() {
        //根据模型，得到一个根的reducer
        let rootReducerObj = {};
        for (const model of app._models) {
            //将模型转换为reducer
            var obj = getReducer(model);
            rootReducerObj[obj.name] = obj.reducer;
        }
        rootReducerObj = { ...rootReducerObj, ...getExtraReducers() }
        const store = createStore(combineReducers(rootReducerObj), getMiddlewares())
        return store;
    }

    /**
     * 根据一个模型，得到一个reducer
     */
    function getReducer(model) {
        const actionTypes = []; //要匹配的action类型
        if (model.reducers) {
            for (const prop in model.reducers) {
                actionTypes.push({
                    type: `${model.namespace}/${prop}`, //要匹配的action类型
                    reducer: model.reducers[prop] //要运行的reducer函数
                });
            }
        }
        const reducerObj = {
            name: model.namespace,
            reducer(state = model.state, action) {
                const temp = actionTypes.find(t => t.type === action.type);
                if (temp) {
                    //运行对应的函数
                    return temp.reducer(state, action);
                }
                else {
                    return state;
                }
            }
        }
        return reducerObj
    }

    /**
     * 渲染
     * @param {*} selector 
     */
    function render(selector, store) {
        const routerConfig = app._router();
        const root = <Provider store={store}>
            {routerConfig}
        </Provider>
        ReactDOM.render(root, document.querySelector(selector));
    }
}