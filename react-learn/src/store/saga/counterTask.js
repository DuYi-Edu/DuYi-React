import { takeEvery } from "redux-saga/effects"
import { actionTypes } from "../action/counter"

function* asyncIncrease() {
    console.log("触发了asyncIncrease")
}

function* asyncDecrease() {
    console.log("触发了asyncDecrease")
}

export default function* () {
    yield takeEvery(actionTypes.asyncIncrease, asyncIncrease)
    yield takeEvery(actionTypes.asyncDecrease, asyncDecrease)
    console.log("正在监听asyncIncrease、asyncDecrease")
}