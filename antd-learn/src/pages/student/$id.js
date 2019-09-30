/**
 * Routes:
 *      - src/router/PrivateRouter
 */
import React from 'react'
import StudentForm from "../../components/StudentForm"

export default function $id(props) {
    return (
        <div>
            <StudentForm sNo={props.match.params.id}/>
        </div>
    )
}
