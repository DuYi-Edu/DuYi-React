import store from "./index"
import { fetchStudents } from "./action/student/searchResult"

store.dispatch(fetchStudents(store.getState().students.condition))