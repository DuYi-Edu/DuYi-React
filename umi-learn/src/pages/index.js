/**
 * title: 首页
 */
import { getAllStudents } from "@/services/student"
import React from 'react'

export default function index() {
    getAllStudents().then(resp => console.log(resp));
    return (
        <div>
            <h1>首页</h1>
        </div>
    )
}
