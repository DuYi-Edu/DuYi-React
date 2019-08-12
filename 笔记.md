# React动画 - CSSTransition

当进入时，发生：

1. 为CSSTransition内部的DOM根元素（后续统一称之为DOM元素）添加样式enter
2. 在一下帧(enter样式已经完全应用到了元素)，立即为该元素添加样式enter-active
3. 当timeout结束后，去掉之前的样式，添加样式enter-done

当退出时，发生：

1. 为CSSTransition内部的DOM根元素（后续统一称之为DOM元素）添加样式exit
2. 在一下帧(exit样式已经完全应用到了元素)，立即为该元素添加样式exit-active
3. 当timeout结束后，去掉之前的样式，添加样式exit-done

设置classNames属性，可以指定类样式的名称

1. 字符串：为类样式添加前缀
2. 对象：为每个类样式指定具体的名称（非前缀）


关于首次渲染时的类样式，appear、apear-active、apear-done，它和enter的唯一区别在于完成时，会同时加入apear-done和enter-done


还可以与Animate.css联用