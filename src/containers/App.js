import React, { Component } from 'react'
import TodoForm from './TodoForm'
import Header from './Header'
import TodoList from './TodoList'
import FilterTodo from './FilterTodo'

class App extends Component {
  render() {
    return (
      <div className='container'>
        <div className="content">
          <Header />
          <FilterTodo />
          <TodoList />
          <TodoForm/>
        </div>
      </div>
    )
  }
}

export default App;
