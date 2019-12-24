import React, { Component } from "react";
import PropTypes from "prop-types";

class TodoItem extends Component {
  state = {};
  render() {
    const { id, title } = this.props.todo;
    return (
      <div style={this.getTitleStyle()}>
        <p>
          <input
            type="checkbox"
            onChange={() => this.props.onToggleCheckbox(id)}
          />
          {title}
          <button
            style={this.closeBtnStyle}
            onClick={() => this.props.onDelete(id)}
          >
            X
          </button>
        </p>
      </div>
    );
  }

  getTitleStyle = () => {
    return {
      backgroundColor: "#f4f4f4",
      padding: "10px",
      borderBottom: "2px #ccc dotted",
      textDecoration: this.props.todo.completed ? "line-through" : "none"
    };
  };

  closeBtnStyle = {
    background: "#ff0000",
    color: "#fff",
    border: "none",
    padding: "5px 10px",
    borderRadius: "50%",
    cursor: "pointer",
    float: "right"
  };
}
TodoItem.propTypes = {
  todo: PropTypes.object.isRequired
};

export default TodoItem;
