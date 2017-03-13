import React, { Component } from 'react'
import TodoForm from './TodoForm'

class App extends Component {
  render() {
    return (
      <div className='container'>
        <div className="content">
          <TodoForm/>
        </div>
      </div>
    )
  }
}

export default App;
