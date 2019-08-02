import React, { useState, useEffect, useDebugValue } from 'react'

function useTest(){
    const [students, ] = useState([])
    useDebugValue("学生集合")
    return students;
}

export default function App() {
    useState(0)
    useState("abc")
    useEffect(() => {
        console.log("effect")
    }, [])
    useTest();
    return (
        <div>
        </div>
    )
}
