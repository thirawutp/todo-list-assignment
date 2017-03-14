import { connect } from 'react-redux'
import TodoList from '../components/TodoList'

const mapStateToProps = (state) => ({
    list: state.todoList,
    filter: state.filter
})

export default connect(mapStateToProps,{})(TodoList)