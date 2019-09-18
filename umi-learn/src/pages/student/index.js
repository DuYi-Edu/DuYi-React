import React from 'react'
import StudentPager from "@/components/containers/StudentPager"
import StudentTableContainer from "@/components/containers/StudentTableContainer"
import StudentSearchBar from "@/components/containers/StudentSearchBar"
import StudentLoading from "@/components/containers/StudentTableLoading"

export default function index() {
    return (
        <>
            <StudentSearchBar />
            <StudentTableContainer />
            <StudentPager />
            <StudentLoading />
        </>
    )
}
