import { createActions, handleActions } from "redux-actions"

export const { setStudentsAndTotal, setIsLoading, fetchStudents } = createActions({
    SET_STUDENTS_AND_TOTAL: (arr, total) => ({
        datas: arr,
        total
    }),
    SET_IS_LOADING: isLoading => isLoading,
    FETCH_STUDENTS: null
})

export default handleActions({
    [setStudentsAndTotal]: (state, { payload }) => ({
        ...state,
        ...payload
    }),
    [setIsLoading]: (state, { payload }) => ({
        ...state,
        isLoading: payload
    })

}, {
        datas: [],
        total: 0,
        isLoading: false
    })