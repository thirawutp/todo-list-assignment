import { connect } from 'react-redux'
import TodoItem from '../components/TodoItem'
import { toggleTodo, deleteTodo } from '../actions/todoActions'
import { openEditForm } from '../actions/formAction'

const mapDispactchToProps = {
    toggleTodo,
    deleteTodo,
    openEditForm
}

export default connect(null,mapDispactchToProps)(TodoItem)