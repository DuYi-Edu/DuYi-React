import { take, delay, put, fork, takeEvery, cancel } from "redux-saga/effects"
import { actionTypes, increase } from "../action/counter"

// function takeEvery(actionType, saga) {
//     return fork(function* () {
//         while (true) {
//             const action = yield take(actionType);
//             fork(saga)
//         }
//     })
// }


function* autoIncrease() {
    let task;
    while (true) {
        yield take(actionTypes.autoIncrease)
        if(task){
            yield cancel(task);
        }
        task = yield fork(function* () {
            while (true) {
                yield delay(2000);
                yield put(increase());
            }
        })
    }
}

export default function* () {
    yield fork(autoIncrease);
    console.log("正在监听autoIncrease")
}