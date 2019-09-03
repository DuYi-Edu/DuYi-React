import { createActions, handleActions } from "redux-actions"

export const { change } = createActions({
    CHANGE: newCondition => newCondition
})

export default handleActions({
    [change]: (state, { payload }) => ({
        ...state,
        ...payload
    })
}, {
        key: "",
        sex: -1,
        page: 1,
        limit: 10
});