# 使用样式

解决两个问题：

1. 保证类样式名称的唯一性：css-module
2. 样式代码的重复：less 或 sass

## 局部样式和全局样式

底层使用了webpack的加载器：css-loader（内部包含了css-module的功能）

css文件 -> css-module -> 对象

1. 某个组件特有的样式，不与其他组件共享，通常，将该样式文件与组件放置在同一个目录(非强制性)(要保证类样式名称唯一)
2. 如果某些样式可能被某些组件共享，这样的样式，通常放到assets/css文件夹中。(要保证类样式名称唯一)
3. 全局样式，名称一定唯一，不需要css-module处理。umijs约定，src/global.css样式，是全局样式，不会交给css-module处理。

## less

less代码 -> less-loader -> css代码 -> css-module -> 对象