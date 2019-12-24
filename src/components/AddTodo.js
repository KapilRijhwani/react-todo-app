import React, { Component } from "react";

class AddTodo extends Component {
  state = {};
  render() {
    return (
      <div>
        <form>
          <input type="text" name="title" placeholder="Add Todo..." />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default AddTodo;
