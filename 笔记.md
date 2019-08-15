# 手写createBrowserHistory

## 创建location

state处理：

```js
var historyState = window.history.state;
```

1. 如果historyState没有值，则state为undefined
2. 如果historyState有值
   1. 如果值的类型不是对象
   2. 是对象
      1. 该对象中有key属性，将key属性作为location的key属性值，并且将historyState对象中的state属性作为state属性值
      2. 如果没有key属性，则直接将historyState赋值给state