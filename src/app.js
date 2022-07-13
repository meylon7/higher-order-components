import React from 'react'
import SearchTodo from "./components/TodoList";
import SearchUser from "./components/UsersList";
const Application = () => {
  return (
    <div className="App">
      <h2 className='header'>Higher Order Component</h2>
      <div className="section">
        <div>
          <SearchUser />
        </div>
        <div>
          <SearchTodo />
        </div>
      </div>
    </div>
  )
}

export default Application