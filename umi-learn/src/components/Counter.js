import React from 'react'
import { connect } from "dva"

function Counter({ number, onIncrease, onDecrease }) {
    return (
        <div>
            <h1>{number}</h1>
            <p>
                <button onClick={onDecrease}>减</button>
                <button onClick={onIncrease}>加</button>
            </p>
        </div>
    )
}

const mapStateToProps = state => ({
    number: state.counter
})

const mapDispatchToProps = dispatch => ({
    onDecrease() {
        dispatch({ type: "counter/decrease" })
    },
    onIncrease() {
        dispatch({ type: "counter/increase" })
    },
})

export default connect(mapStateToProps, mapDispatchToProps)(Counter);