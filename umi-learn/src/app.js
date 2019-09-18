import logger from "redux-logger"

export function patchRoutes(routes) {
    //动态的配置路由
    //参数routes是默认的路由配置
    // routes[0].routes.shift();
    //在此位置，可以动态的改变路由配置
}

export const dva = {
    config: {
        onAction: [logger]
    },
    plugins: []
}