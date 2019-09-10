export default {
    plugins: [
        ["umi-plugin-react", {
            title: true, //开启title插件
            dva: true, //开启dva插件
            immer: true, //开启immer插件  dva-immer 基础immer库 袁老师不建议启用该插件
            routes: {
                exclude: [/.*\/models\/.*/, /.*\/model\.js/]
            }
        }]
    ]
}