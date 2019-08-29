import React from 'react'
import { Provider } from "react-redux"
import store from "./store"
import StudentSearch from "./components/StudentSearch"

export default function App() {
    return (
        <Provider store={store}>
            <StudentSearch/>
        </Provider>
    )
}
