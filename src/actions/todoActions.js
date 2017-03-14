import { CREATE_TODO, TOGGLE_TODO, DELETE_TODO, EDIT_TODO, FILTER_TODO } from './types'

const createTodo = (todo) => ({
    type: CREATE_TODO,
    payload: { todo }
})

const toggleTodo = (todoId) => ({
    type: TOGGLE_TODO,
    payload: { todoId }
})

const deleteTodo = (todoId) => ({
    type: DELETE_TODO,
    payload: { todoId }
})

const filterTodo = (filter) => ({
    type: FILTER_TODO,
    payload: { filter }
})

const editTodo = (todo) => ({
    type: EDIT_TODO,
    payload: { todo }
})

export {
    createTodo,
    toggleTodo,
    deleteTodo,
    editTodo,
    filterTodo,
}