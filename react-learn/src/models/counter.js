export default {
    namespace: "counter",
    state: 0,
    reducers: {
        increase(state) {
            return state + 1;
        },
        decrease(state) {
            return state - 1;
        },
        add(state, { payload }) {
            return state + payload;
        }
    },
    effects: {
        *asyncIncrease(action, { call, put }) {
            yield call(delay, 1000);
            yield put({ type: "increase" })
        },
        *asyncDecrease(action, { call, put }) {
            yield call(delay, 1000);
            yield put({ type: "decrease" })
        }
    }
}

function delay(duration) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve()
        }, duration);
    })
}