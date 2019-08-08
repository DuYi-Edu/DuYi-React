export default {
    isLogin: false,
    login() {
        this.isLogin = true;
    },
    loginOut() {
        this.isLogin = false;
    }
}