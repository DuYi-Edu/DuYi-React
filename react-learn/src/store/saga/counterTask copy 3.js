import { take, delay, put, fork, takeLatest, cancel } from "redux-saga/effects"
import { actionTypes, increase } from "../action/counter"

// function takeEvery(actionType, saga) {
//     return fork(function* () {
//         while (true) {
//             const action = yield take(actionType);
//             fork(saga)
//         }
//     })
// }
var isStop = false; //是否停止

function* autoIncrease() {
    isStop = false;
    while (true) {
        yield delay(2000);
        if (isStop) {
            break;
        }
        yield put(increase());
    }
}

function stopAutoIncrease(){
    isStop = true;
}

export default function* () {
    yield takeLatest(actionTypes.autoIncrease, autoIncrease);
    yield takeLatest(actionTypes.stopAutoIncrease, stopAutoIncrease);
    console.log("正在监听autoIncrease")
}