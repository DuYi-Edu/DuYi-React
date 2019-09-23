/**
 * Routes:
 *      - src/router/PrivateRouter
 */
import React from 'react'
import StudentTableContainer from "@/components/containers/StudentTableContainer"
import StudentSearchBar from "@/components/containers/StudentSearchBar"

export default function index() {
    return (
        <>
            <StudentSearchBar />
            <StudentTableContainer />
        </>
    )
}
