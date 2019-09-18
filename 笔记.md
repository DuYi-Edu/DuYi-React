# 配置

## 额外的约定文件

- src/pages/document.ejs: 页面模板文件
- src/global.js：在umi最开始启动时运行的js文件
- src/app.js：作运行时配置的代码
  - patchRoutes: 函数，该函数会在umi读取完所有静态路由配置后执行
  - dva
    - config： 相当于new dva(配置)
    - plugins： 相当于dva.use(插件)
- .env: 配置环境变量，这些变量会在umi编译期间发挥作用
  - UMI_ENV：umi的环境变量值，可以是任意值，该值会影响到.umirc.js
  - PORT
  - MOCK

## umirc配置

### umi配置

书写在.umirc.js文件中的配置

- plugins：配置umijs的插件
- routes：配置路由（会导致约定式路由失效）
- history：history对象模式（默认是browser）
- outputPath：使用umi build后，打包的目录名称，默认./dist
- base: 相当于之前BrowserRouter中的basename
- publicPath: 指定静态资源所在的目录
- exportStatic: 开启该配置后，会打包成多个静态页面，每个页面对应一个路由，开启多静态页面应用的前提条件是：没有动态路由

### webpack配置
