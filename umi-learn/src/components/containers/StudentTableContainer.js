import { connect } from "dva"
import StudentTable from "../StudentTable"

const mapStateToProps = state => ({
    stus: state.students.result.datas
})

export default connect(mapStateToProps)(StudentTable)