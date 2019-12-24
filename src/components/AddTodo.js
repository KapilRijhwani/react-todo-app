import React, { Component } from "react";

class AddTodo extends Component {
  state = {
    title: ""
  };
  render() {
    return (
      <div>
        <form style={{ display: "flex" }}>
          <input
            type="text"
            name="title"
            placeholder="Add Todo..."
            style={{ flex: "10", padding: "5px" }}
            value={this.state.title}
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
