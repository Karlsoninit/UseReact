import React, { Component, createRef } from "react";
import style from "./Task.module.css";
// const Task = ({
//   id,
//   value,
//   onReturnIdAndDeleteItem,
//   onUpdatePriority,
//   priority
// }) => (
//   <div className={style[priority]}>
//     <p>{value}</p>
//     <button onClick={onReturnIdAndDeleteItem}>Delete</button>
//     <select
//       value={priority}
//       name="priority"
//       onChange={e => onUpdatePriority(id, e.target.value)}
//     >
//       <option value="low">Low</option>
//       <option value="normal">Normal</option>
//       <option value="hight">Hight</option>
//     </select>
//     <button>Editor</button>
//   </div>
// );

// export default Task;

export default class Task extends Component {
  getPosition = createRef();
  state = {
    isOpen: false,
    value: ""
  };

  dropMenu = () => [
    this.setState(prevState => ({ isOpen: !prevState.isOpen }))
  ];
  saveAfterEditor = e => {
    this.setState({ value: e.target.value });
  };
  returnUpValueForApp = () => {
    console.log(this.state.value);
    const { id } = this.props;
    this.props.returnSaveItem({ ...this.state, id });
  };

  getpos = e => {
    // console.log(e.target);
    // console.log(this.getPosition);
  };

  componentDidMount() {
    window.addEventListener("click", this.getpos);
  }
  render() {
    // console.log(this.state.value);
    const {
      id,
      value,
      onReturnIdAndDeleteItem,
      onUpdatePriority,
      priority
    } = this.props;
    const { isOpen } = this.state;
    // console.log(this.getPosition);
    return (
      <div
        ref={this.getPosition}
        className={style[priority]}
        onClick={this.getpos}
      >
        {!isOpen ? (
          <>
            <p className={style.text}>{value}</p>
            <button onClick={onReturnIdAndDeleteItem}>Delete</button>
            <select
              value={priority}
              name="priority"
              onChange={e => onUpdatePriority(id, e.target.value)}
            >
              <option value="low">Low</option>
              <option value="normal">Normal</option>
              <option value="hight">Hight</option>
            </select>
            <button onClick={this.dropMenu}>Editor</button>
          </>
        ) : (
          <>
            <button onClick={this.dropMenu}>Editor</button>
            <input
              className={style.input}
              type="text"
              onChange={this.saveAfterEditor}
              onClick={this.returnUpValueForApp}
            />
          </>
        )}
      </div>
    );
  }
}
