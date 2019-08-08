import React from 'react'
import { Route, Switch } from "react-router-dom"
import routeConfig from "./routeConfig"

/**
 * 根据一个路由配置数组，遍历该数组，得到一组Route组件
 * @param {*} routes 
 */
function getRoutes(routes, basePath) {
    if (!Array.isArray(routes)) {
        return null;
    }
    var rs = routes.map((rt, i) => {
        const { children, name, path, component: Component, ...rest } = rt;
        let newPath = `${basePath}${path}`;
        newPath = newPath.replace(/\/\//g, "/");
        return (
            <Route key={i} {...rest}
                path={newPath}
                render={values => {
                    return <Component {...values}>
                        {getRoutes(rt.children, newPath)}
                    </Component>
                }}
            />
        )
    });
    return <Switch>
        {rs}
    </Switch>
}

/**
 * 使用Route组件，根据不同的路径，渲染顶级页面
 */
export default function RootRouter() {
    return (
        <>
            {/* 返回一组Route */}
            {getRoutes(routeConfig, "/")}
        </>
    )
}
