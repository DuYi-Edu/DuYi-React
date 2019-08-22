import store from "./index"
import { fetchUsers } from "./action/usersAction"

store.dispatch(fetchUsers());