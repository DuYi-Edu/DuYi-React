import { connect, router } from "dva"
import Menu from "../Menu"
import { routerRedux } from "dva/router"
const mapStateToProps = state => ({
    loginId: state.loginUser
})
const mapDispatchToProps = dispatch => ({
    onLoginOut() {
        dispatch({ type: "loginUser/loginOut" });
        dispatch(routerRedux.push("/login"));
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Menu)