import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import 'normalize.css'
import './style.css'

class TodoList extends Component {
  constructor () {
    super()

    this.state = {
      todos: []
    }

    this.addNewTodo = this.addNewTodo.bind(this)
    this.getRandomColor = this.getRandomColor.bind(this)
    this.deleteTodo = this.deleteTodo.bind(this)
  }

  addNewTodo (e) {
    e.preventDefault()
    const color = this.getRandomColor()

    this.setState({
      todos: this.state.todos.concat({
        todo: document.querySelector('input').value,
        color: color
      })
    })

    document.querySelector('input').value = ''
  }

  deleteTodo (selectedTodo) {
    this.setState(previousState => ({
      todos: previousState.todos.filter(todo => selectedTodo !== todo.todo)
    }))
  }

  getRandomColor () {
    const r = (Math.floor(Math.random() * 156) + 90)
    const g = (Math.floor(Math.random() * 156) + 90)
    const b = (Math.floor(Math.random() * 156) + 90)

    return 'rgb(' + r + ',' + g + ',' + b + ')'
  }

  componentDidUpdate () {
    localStorage.setItem('todos', JSON.stringify(this.state.todos))
  }

  componentDidMount () {
    if (localStorage.getItem('todos')) {
      this.setState({
        todos: JSON.parse(localStorage.getItem('todos'))
      })
    }
  }

  render () {
    return (
      <div>
        <h1 style={{backgroundColor: this.getRandomColor()}}> Add Some Todos! </h1>
        {
          this.state.todos.map((todo, index) => {
            return (<Todo
              todo={todo.todo}
              key={todo.todo + index}
              color={todo.color}
              deleteTodo={this.deleteTodo}
            />
            )
          })
        }
        <form
          style={{backgroundColor: this.getRandomColor()}}
          onSubmit={this.addNewTodo}
        >
          <input
            type='text'
            name='add new todo'
            placeholder='Type your todos here...'
            maxLength='31'
            autoComplete='off'
            noValidate
          />
        </form>
        <footer>Built by <a href='http://rmorabia.com'>Radhika Morabia</a>. Source on <a href='http://github.com/rmorabia/todo/tree/react'>GitHub</a>.</footer>
      </div>
    )
  }
}

class Todo extends React.Component {
  constructor () {
    super()

    this.state = {
      done: false
    }

    this.markAsDone = this.markAsDone.bind(this)
  }

  markAsDone () {
    this.setState(previousState => ({
      done: !previousState.done
    }))
  }

  render () {
    return (
      <div className={'todo'} >
        <div
          onClick={this.markAsDone}
          className={this.state.done && 'done'}
          style={{backgroundColor: this.props.color}}
        >
          <span>{this.props.todo}</span>
          <img
            src='delete.svg'
            className={'deleteButton'}
            onClick={() => {
              this.props.deleteTodo(this.props.todo)
            }}
          />
        </div>
      </div>
    )
  }
}

ReactDOM.render(<TodoList />, document.getElementById('app'))
