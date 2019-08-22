import store from "./index"
import { fetchUsers } from "./action/usersAction"

store.dispatch(fetchUsers()).then(()=>{
    console.log("加载完成")
});
