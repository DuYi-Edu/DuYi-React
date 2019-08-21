import { createStore } from "redux";
import reducer from "./reducer"
import { createAddUserAction } from "./action/usersAction"
import uuid from 'uuid'

const store = createStore(reducer);


console.log(store.getState());

store.dispatch(createAddUserAction({
    id: uuid(),
    name: "abc",
    age: 10
}));

console.log(store.getState());