import { actionTypes, setIsLoading } from "../action/student/searchResult"
import { takeEvery, put } from "redux-saga/effects"
import { searchStudents } from "../../services/student"

function mockStudents() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() > 0.5) {
                resolve("学生数据");
            }
            else {
                reject("错误！！！！");
            }
        }, 2000);
    })
}

function* fetchStudents() {
    //设置为正在加载中
    yield put(setIsLoading(true))
    //当saga发现得到的结果是一个Promise对象，它会自动等待该Promise完成
    //完成之后，会把完成的结果作为值传递到下一次next
    //如果Promise对象被拒绝，saga会使用generator.throw抛出一个错误
    try{
        const resp = yield mockStudents()
        console.log(resp);
    }
    catch(err){
        //err表示reject的内容
        console.log(err);
    }
}

export default function* () {
    yield takeEvery(actionTypes.fetchStudents, fetchStudents);
    console.log("正在监听 fetchStudents")
}