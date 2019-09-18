export default {
    proxy: {
        "/api": {
            target: "http://api.duyiedu.com/",
            changeOrigin: true
        }
    }
}