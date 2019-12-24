import React, { Component } from "react";
import TodoItem from "./Todo";
import PropTypes from "prop-types";

class Todos extends Component {
  state = {};
  render() {
    return (
      <div>
        {this.props.todos.map(todo => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onToggleCheckbox={this.props.onToggleCheckbox}
            onDelete={this.props.onDelete}
          />
        ))}
      </div>
    );
  }
}
Todos.propTypes = {
  todos: PropTypes.array.isRequired
};

export default Todos;
