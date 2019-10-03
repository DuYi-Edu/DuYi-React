export default {
    plugins: [
        ["umi-plugin-react", {
            antd: true,
            dva: true
        }]
    ],
    theme: {
        "primary-color": "#008c8c"
    },
    proxy: {
        "/api/upload": {
            target: "http://101.132.72.36:5100/",
            changeOrigin: true
        },
        "/api": {
            target: "http://api.duyiedu.com/",
            changeOrigin: true
        }
    }
}