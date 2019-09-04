课前知识

> 1. chrome插件：redux-devtools
> 2. 使用npm安装第三方库：redux-devtools-extension

# redux和router的结合（connected-react-router）

用于将redux和react-router进行结合

本质上，router中的某些数据可能会跟数据仓库中的数据进行联动

该组件会将下面的路由数据和仓库保持同步

1. action：它不是redux的action，它表示当前路由跳转的方式（PUSH、POP、REPLACE）
2. location：它记录了当前的地址信息


该库中的内容：

## connectRouter

这是一个函数，调用它，会返回一个用于管理仓库中路由信息的reducer，该函数需要传递一个参数，参数是一个history对象。该对象，可以使用第三方库history得到。

## routerMiddleware

该函数会返回一个redux中间件，用于拦截一些特殊的action

## ConnectedRouter

这是一个组件，用于向上下文提供一个history对象和其他的路由信息（与react-router提供的信息一致）

之所以需要新制作一个组件，是因为该库必须保证整个过程使用的是同一个history对象

## 一些action创建函数

- push
- replace