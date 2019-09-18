import { connect } from "dva"
import Loading from "../Loading"
const mapStateToProps = state => ({
    show: state.loading.effects["students/fetchStudents"]
})
export default connect(mapStateToProps)(Loading)