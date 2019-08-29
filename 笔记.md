# react-redux 其他api

> 详情参考：https://react-redux.js.org/api

## connect

- mergeProps: 一个函数
  - 参数1：stateProps，该参数的值来自于mapStateToProps返回的值
  - 参数2：dispatchProps，该参数的值来自于mapDispatchToProps返回的值
  - 参数3：ownProps，来自于组件使用者传递的属性
  - 返回值：一个对象，该对象的属性最终会被传递到包装的组件中。
- options：配置对象
  
## connectAdvanced

该函数和connect一样，也是用于连接React组件和Redux仓库的，只不过它的配置比connect少一些

该函数需要传递两个参数：

- selectorFactory
  - 参数1：dispatch
  - 参数2：factoryOptions，配置
  - 返回：函数
    - 参数1：state
    - 参数2：ownProps
    - 返回的是一个对象：该对象的属性最终，会成为包装的组件的属性
- connectOptions

## createProvider

createProvider(字符串key)：通过一个唯一的key值创建一个Provider组件。

```js
var Provider1 = createProvider("p1");
var Provider2 = createProvider("p2");
```