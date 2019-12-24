import React, { Component } from "react";
import Todos from "./components/Todos";
import Header from "./components/Header";
import AddTodo from "./components/AddTodo";

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: "Todo 1",
        completed: false
      },
      {
        id: 2,
        title: "Todo 2",
        completed: false
      },
      {
        id: 3,
        title: "Todo 3",
        completed: false
      }
    ]
  };
  render() {
    return (
      <div>
        <Header />
        <AddTodo />
        <Todos
          todos={this.state.todos}
          onToggleCheckbox={this.toggleTodoItem}
          onDelete={this.deleteTodoItem}
        />
      </div>
    );
  }

  toggleTodoItem = id => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    });
  };

  deleteTodoItem = id => {
    this.setState({
      todos: [...this.state.todos.filter(todo => todo.id !== id)]
    });
  };
}

export default App;
