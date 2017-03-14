import { connect } from 'react-redux'
import FilterTodo from '../components/FilterTodo'
import { filterTodo } from '../actions/todoActions'

const mapStateToProps = (state) => ({
    filter: state.filter,
    total: state.todoList
})

const mapDispatchToProps = {
    filterTodo
}

export default connect(mapStateToProps,mapDispatchToProps)(FilterTodo)