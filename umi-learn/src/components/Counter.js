import React from 'react'
import { connect } from "dva"
import styles from "./Counter.css"
import buttonStyles from "@/assets/css/button.css"
function Counter({ number, onIncrease, onDecrease }) {
    return (
        <div className={styles.counter}>
            <h1 className={styles.title}>{number}</h1>
            <p>
                <button className={buttonStyles.button} onClick={onDecrease}>减</button>
                <button className={buttonStyles.button} onClick={onIncrease}>加</button>
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