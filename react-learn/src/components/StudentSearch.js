import React from "react"
import StudentSearchBar from "./StudentSearchBar"
import { connect, connectAdvanced } from "react-redux"
import { change as changeCondition } from "../store/action/student/searchCondition"
import { fetchStudents } from "../store/action/student/searchResult"
import StudentTable from "./StudentTable"
import Pager from "./common/Pager"
import store from "../store"
import Loading from "./Loading"

//连接 StudentSearchBar
let mapStateToProps = state => ({
    key: state.students.condition.key,
    sex: state.students.condition.sex
})

let mapDispatchToProps = dispatch => ({
    onSearch: (newCondition) => {
        newCondition.page = 1; //条件中页码回归到1
        //重新设置条件
        dispatch(changeCondition(newCondition))
        //触发获取学生数据的action
        dispatch(fetchStudents());
    }
})
//连接数据和处理函数之后，得到一个新的组件
const SearchBar = connect(mapStateToProps, mapDispatchToProps)(StudentSearchBar)

//连接 StudentTable
mapStateToProps = state => ({
    stus: state.students.result.datas
})
const Table = connect(mapStateToProps)(StudentTable)

//连接 Pager
function selectorFactory(dispatch) {
    return function (state, ownProps) {
        return {
            current: state.students.condition.page,
            total: state.students.result.total,
            limit: state.students.condition.limit,
            panelNumber: 5,
            onPageChange: (newPage) => {
                dispatch(changeCondition({ page: newPage }))
                dispatch(fetchStudents());
            }
        }
    }
}
const PagerTemp = connectAdvanced(selectorFactory)(Pager)

//连接 Loading
mapStateToProps = state => ({
    show: state.students.result.isLoading
})
const LoadingTemp = connect(mapStateToProps)(Loading);


export default class StudentSearch extends React.Component {

    componentDidMount() {
        store.dispatch(fetchStudents());
    }


    render() {
        return <>
            <SearchBar />
            <Table />
            <PagerTemp />
            <LoadingTemp />
        </>
    }
}