import React from 'react'
import Link from "./BetterLink"

export default function News(props) {
    return (
        <div>
            <nav>
                <Link to={{ name: "newsHome" }}>新闻首页</Link>
                <Link to={{ name: "newsDetail" }}>新闻详情页</Link>
                <Link to={{ name: "newsSearch" }}>新闻搜索页</Link>
            </nav>
            <div>
                {/* 匹配新闻页的子页面 */}
                {props.children}
            </div>
        </div>
    )
}
