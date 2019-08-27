import { fork, race, call } from "redux-saga/effects"
import { increase, decrease } from "../action/counter"

/**
 * 异步的得到一个action
 */
function asyncAction() {
    //生成一个1000~5000毫秒的随机时间
    var duration = Math.floor(Math.random() * 4000 + 1000);
    return new Promise(resolve => {
        setTimeout(() => {
            if (Math.random() > 0.5) {
                resolve(increase())
            }
            else {
                resolve(decrease());
            }
        }, duration);
    })
}



export default function* () {
    var result = yield race({
        action1: call(asyncAction),
        action2: call(asyncAction)
    })
    console.log(result);
}