import { createStore, bindActionCreators } from "../redux";
import reducer from "./reducer"
import { createAddUserAction } from "./action/usersAction"


const store = createStore(reducer);

const addUser = bindActionCreators(createAddUserAction, store.dispatch)

store.subscribe(() => {
    console.log("监听器1", store.getState());
})

addUser({ id: 3, name: "abc", age: 111 })
addUser({ id: 4, name: "abc", age: 111 })
addUser({ id: 5, name: "abc", age: 111 })
addUser({ id: 6, name: "abc", age: 111 })