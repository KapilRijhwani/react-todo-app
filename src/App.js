import React, { Component } from "react";
import Todos from "./components/Todos";
import Header from "./components/Header";
import AddTodo from "./components/AddTodo";
import uuid from "uuid";
import About from "./components/pages/About";
import { BrowserRouter as Router, Route } from "react-router-dom";

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
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            <Route
              exact
              path="/"
              render={props => (
                <React.Fragment>
                  <AddTodo addTodo={this.addTodo} />
                  <Todos
                    todos={this.state.todos}
                    onToggleCheckbox={this.toggleTodoItem}
                    onDelete={this.deleteTodoItem}
                  />
                </React.Fragment>
              )}
            />
            <Route path="/about" component={About} />
          </div>
        </div>
      </Router>
    );
  }

  addTodo = title => {
    const newTodo = {
      id: uuid.v4(),
      title,
      completed: false
    };
    this.setState({ todos: [...this.state.todos, newTodo] });
  };

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
