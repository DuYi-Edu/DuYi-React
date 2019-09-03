import { fetchStudents, setIsLoading, setStudentsAndTotal } from "../action/student/searchResult"
import { takeEvery, put, cps, select } from "redux-saga/effects"

/**
 * 回调模式的异步
 * @param {*} callback 
 */
function mockStudents(condition, callback) {
    console.log("mockStudents", condition);
    setTimeout(() => {
        if (Math.random() > 0.5) {
            //nodejs风格
            callback(null, {
                cont: 78,
                datas: [
                    { id: 1, name: "abc" },
                    { id: 2, name: "bcd" }
                ]
            })
        }
        else {
            callback(new Error("出错了！！！1"), null);
        }
    }, 1000);
}

function* fetchStudentsSaga() {
    //设置为正在加载中
    yield put(setIsLoading(true))
    const condition = yield select(state => state.students.condition);
    //使用call指令，按照当前仓库中的条件
    try {
        const resp = yield cps(mockStudents, condition)
        yield put(setStudentsAndTotal(resp.datas, resp.cont))
    }
    catch (err) {
        console.log(err.message);
    }
    finally {
        yield put(setIsLoading(false));
    }
}

export default function* () {
    yield takeEvery(fetchStudents.toString(), fetchStudentsSaga);
    console.log("正在监听 fetchStudents")
}