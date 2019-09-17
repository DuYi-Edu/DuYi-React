import React from 'react'
import styles from "./index.css"

export default function index(props) {
    return (
        <>
            <div className={styles.header}>
                {props.header}
            </div>
            <div className={styles.main}>
                <div className={styles.left}>
                    {props.aside}
                </div>
                <div className={styles.right}>
                    {props.main}
                </div>
            </div>
        </>
    )
}
