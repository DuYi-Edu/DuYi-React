import { increase, decrease, add } from "../../action/counter"
import { handleActions } from "redux-actions"

const reducer = handleActions({
    [increase]: state => state + 1,
    [decrease]: state => state - 1,
    [add]: (state, action) => state + action.payload
}, 5)

export default reducer;