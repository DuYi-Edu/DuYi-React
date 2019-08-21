import { createStore } from "../redux";
import reducer from "./reducer"
import { createAddUserAction, createDeleteUserAction } from "./action/usersAction"


const store = createStore(reducer);


const unListen = store.subscribe(() => {
    console.log("监听器1", store.getState());
})

store.dispatch(createAddUserAction({
    id: 3,
    name: "abc",
    age: 10
}));

unListen(); //取消监听

store.dispatch(createDeleteUserAction(3));