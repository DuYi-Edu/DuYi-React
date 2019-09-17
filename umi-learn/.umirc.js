export default {
    plugins: [
        ["umi-plugin-react", {
            dva: true
        }]
    ],
    proxy: {
        "/api": {
            target: "http://api.duyiedu.com/",
            changeOrigin: true
        }
    }
}