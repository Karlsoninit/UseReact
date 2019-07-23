import React, { Component } from "react";

class TaskEditor extends Component {
  state = {
    text: "",
    priority: "normal"
  };

  handleGetValueForm = ({ target }) => {
    const { value, name } = target;
    this.setState({ [name]: value });
  };
  handleSubmitForm = e => {
    e.preventDefault();
    this.props.onGetTask({ ...this.state });
  };
  render() {
    return (
      <form onSubmit={this.handleSubmitForm}>
        <input
          type="text"
          placeholder="enter your tasks"
          name="text"
          onChange={this.handleGetValueForm}
        />
        <select name="priority" onChange={this.handleGetValueForm}>
          <option value="Low">Low</option>
          <option value="Normal">Normal</option>
          <option value="Hight">Hight</option>
        </select>
        <button>Submit</button>
      </form>
    );
  }
}

export default TaskEditor;
