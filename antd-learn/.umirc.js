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
        "/api": {
            target: "http://api.duyiedu.com/",
            changeOrigin: true
        }
    }
}