import React, { Component } from "react";
import style from "./FormEditor.module.css";

export default class FormEditor extends Component {
  state = {
    value: "",
    priority: "normal"
  };

  saveStateValue = ({ target }) => {
    const { name } = target;
    this.setState({ [name]: target.value });
  };

  formSubmit = evt => {
    evt.preventDefault();

    this.props.onGetTask({
      ...this.state
    });
    this.reset();
  };

  reset = () => {
    this.setState({ value: "" });
  };

  render() {
    const { value, priority } = this.state;
    return (
      <form className={style.containerForm} onSubmit={this.formSubmit}>
        <input
          name="value"
          value={value}
          className={style.input}
          tupe="text"
          onChange={this.saveStateValue}
        />
        <select name="priority" onChange={this.saveStateValue} value={priority}>
          <option value="low">Low</option>
          <option value="normal">Normal</option>
          <option value="hight">Hight</option>
        </select>
        <button className={style.btn} type="submit">
          Submit
        </button>
      </form>
    );
  }
}
