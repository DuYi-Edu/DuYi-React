import Home from "./Home"
import News from "./News"
import NewsHome from "./NewsHome"
import NewsDetail from "./NewsDetail"
import NewsSearch from "./NewsSearch"

export default [
    {
        path: "/news", component: News, name: "news",
        children: [
            { path: "/", name: "newsHome", exact: true, component: NewsHome },
            { path: "/dl", name: "newsDetail", exact: true, component: NewsDetail },
            { path: "/ser", name: "newsSearch", exact: true, component: NewsSearch }
        ]
    },
    { path: "/", name: "home", component: Home },
]