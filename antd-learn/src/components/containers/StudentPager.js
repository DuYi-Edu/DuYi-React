import { connect } from "dva"
import { Pagination } from "antd"

const mapStateToProps = state => ({
    current: state.students.condition.page,
    total: state.students.result.total,
    pageSize: state.students.condition.limit,
    showQuickJumper: true
})

const mapDispatchToProps = dispatch => ({
    onChange(newPage) {
        //重新设置条件
        dispatch({
            type: "students/setCondition",
            payload: {
                page: newPage
            }
        })
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Pagination);