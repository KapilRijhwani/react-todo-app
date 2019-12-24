import React, { Component } from "react";

class AddTodo extends Component {
  state = {
    title: ""
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.addTodo(this.state.title);
    this.setState({ title: "" });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit} style={{ display: "flex" }}>
          <input
            type="text"
            name="title"
            placeholder="Add Todo..."
            style={{ flex: "10", padding: "5px" }}
            value={this.state.title}
            onChange={this.onChange}
          />

          <input
            type="submit"
            value="Submit"
            className="btn"
            style={{
              flex: "1",
              display: "inline-block",
              border: "none",
              background: "#555",
              color: "#fff",
              padding: "7px 20px",
              cursor: "pointer"
            }}
          />
        </form>
      </div>
    );
  }
}

export default AddTodo;
