# 约定式路由

umi对路由的处理，主要通过两种方式：

1. **约定式**：使用约定好的文件夹和文件，来代表页面，umi会根据开发者书写的页面，生成路由配置。
2. 配置式：直接书写路由配置文件

## 路由匹配

- umi约定，工程中的pages文件夹中存放的是页面。如果工程包含src目录，则src/pages是页面文件夹。
- umi约定，页面的文件名，以及页面的文件路径，是该页面匹配的路由
- umi约定，如果页面的文件名是index，则可以省略文件名（首页）(注意避免文件名和当前目录中的文件夹名称相同)
- umi约定，如果src/layout目录存在，则该目录中的index.js表示的是全局的通用布局，布局中的children则会添加具体的页面。
- umi约定，如果pages文件夹中包含_layout.js，则layout.js所在的目录以及其所有的子目录中的页面，共用该布局。
- 404约定，umi约定，pages/404.js，表示404页面，如果路由无匹配，则会渲染该页面。该约定在开发模式中无效，只有部署后生效。
- 使用$名称，会产生动态路由

## 路由跳转

- 跳转链接： 导入```umi/link```，```umi/navlink```
- 代码跳转： 导入```umi/router```

> 导入模块时，@表示src目录

## 路由信息的获取

所有的页面、布局组件，都会通过属性，收到下面的属性

- match：等同于react-router的match
- history：等同于react-router的history（history.location.query被封装成了一个对象，使用的是query-string库进行的封装）
- location：等同于react-router的location（location.query被封装成了一个对象，使用的是query-string库进行的封装）
- route：对应的是路由配置

如果需要在普通组件中获取路由信息，则需要使用withRouter封装，可以通过```umi/withRouter```导入