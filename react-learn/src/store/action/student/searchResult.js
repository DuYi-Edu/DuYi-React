import { searchStudents } from "../../../services/student"

export const actionTypes = {
    //设置学生查询结果数组和总数
    setStudentsAndTotal: Symbol("setStudentsAndTotal"),
    setIsLoading: Symbol("setIsLoading")
}

/**
 * action creator
 * 得到一个设置学生数组和总数的action
 * @param {*} arr 
 * @param {*} total 
 */
export function setStudentsAndTotal(arr, total) {
    return {
        type: actionTypes.setStudentsAndTotal,
        payload: {
            datas: arr,
            total
        }
    }
}

/**
 * action creator
 * 得到一个设置是否正在加载中的action
 * @param {*} isLoading 
 */
export function setIsLoading(isLoading) {
    return {
        type: actionTypes.setIsLoading,
        payload: isLoading
    }
}

/**
 * 根据当前仓库中的查询条件，查询学生
 */
export function fetchStudents() {
    return async function (dispatch, getState) {
        dispatch(setIsLoading(true));
        const condition = getState().students.condition;
        const resp = await searchStudents(condition)
        dispatch(setStudentsAndTotal(resp.datas, resp.cont));
        dispatch(setIsLoading(false));
    }
}