
const newTodoReducer = (state=[],action) => {
  switch (action.type) {
    case 'TEST_NEW_TODO':
      return state
    default:
      return state
  }
}

export default newTodoReducer
