import './App.css';
import React from 'react'
import NavBar from './components/NavBar.js';
import Main from './components/Main.js';
import Footer from './components/Footer.js';
import TodoItem from './components/TodoItem.js'
import todosData from './components/todosData.js'

class App extends React.Component {
    constructor() {
      super()
      this.state = {
        todos: todosData
      }
      this.handleChange = this.handleChange.bind(this)
    }


    handleChange(id) {
      this.setState(prevState => {
        const updatedTodos = prevState.todos.map(todo => {
          if (todo.id === id) {
            todo.completed = !todo.completed
          }
          return todo
        })
        return {
          todos: updatedTodos
        }
      })
      // console.log(id, "change")
    }

    render() {

      const toDoItems = this.state.todos.map(item =>
          <TodoItem key={item.id} item={item}
          handleChange={this.handleChange}/>)
      return(
        <div>
          <NavBar/>
          <Main/>
          <div className="todo-list">
            {toDoItems}
          </div>
          <Footer/>
        </div>
      )
    }
}

export default App;
