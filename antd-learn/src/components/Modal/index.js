import React from 'react'
import styles from "./index.css"
import types from "../../utils/commonTypes"
import PropTypes from "prop-types"

Modal.defaultProps = { //默认属性
    bg: "rgba(0,0,0,.5)"
};

Modal.propTypes = {
    children: types.children,
    bg: PropTypes.string,
    onClose: PropTypes.func
}
export default function Modal(props) {

    return (
        <div onClick={e => {
            if (e.target.className === styles.modal) {
                props.onClose();
            }
        }} className={styles.modal} style={{
            background: props.bg
        }}>
            <div className={styles["modal-center"]}>
                {props.children}
            </div>
        </div>
    )
}
