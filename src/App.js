import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// data
import { todos } from './todos.json';

// subcomponent
import TodoForm from './components/TodoForm';
import Navigation from './components/Navigation';

class App extends Component {

  constructor(){
    super();
    this.state = {
      title: 'Aplicacion de tareas',
      ntareas: 10,
      todos
    }
    this.handleAddTodo = this.handleAddTodo.bind(this);
  }

  removeTodo(index) {
    this.setState({
      todos: this.state.todos.filter((e, i) => {
        return i !== index
      })
    });
  }

  handleAddTodo(todo) {
    this.setState({
      todos: [...this.state.todos, todo]
    })
  }

  render() {
  
  const todos = this.state.todos.map((todo, i) => {
  return (
    <div className="col-md-4">
      <div className="card mt-4">
        <div className="card-header">
          <h3>{todo.title}</h3>
          <span className="badge badge-pill badge-danger ml-2">
            {todo.priority}
          </span>
        </div>
        <div className="card-body">
          <p>{todo.description}</p>
        </div>
        <div className="card-footer">
              <button
                className="btn btn-danger"
                onClick={this.removeTodo.bind(this, i)}>
                Delete
              </button>
        </div>
      </div>
    </div>
  );
  })
  
    return (
    <div className="App">
        <Navigation title="Hola" todos={todos} />
        <Navigation title="Chao" todos={todos}/>
        <div className="container">
          <div className="row mt-4">
            <div className="col md-3">
            <TodoForm onAddTodo={this.handleAddTodo}></TodoForm>
            </div>
            <div className="col md-9">
              <div className="row">
                {todos}
              </div>
            </div>
          </div>
        </div>
    </div>
  );
}
}

export default App;
