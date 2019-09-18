import { connect } from "dva"
import SearchBar from "../StudentSearchBar"

const mapStateToProps = state => ({
    defaultValue: {
        key: state.students.condition.key,
        sex: state.students.condition.sex,
    }
})


const mapDispatchToProps = dispatch => ({
    onSearch(newCondition) {
        newCondition.page = 1;
        dispatch({
            type: "students/setCondition",
            payload: newCondition
        })
    }
})
export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);