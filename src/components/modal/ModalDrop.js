import React, { Component, createRef } from "react";
import css from "./ModalDrop.module.css";
class ModalDrop extends Component {
  state = {};
  createClose = createRef();
  componentDidMount() {
    console.log("componentDidMount");
    window.addEventListener("keydown", this.handleCLoseEscape);
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
    window.removeEventListener("keydown", this.handleCLoseEscape);
  }

  handleCLoseEscape = e => {
    if (e.key !== "Escape") return;
    this.props.onClose();
  };

  closeWindow = e => {
    console.log("e.target", e.target);
    const { current } = this.createClose;
    console.log(current);
    if (current !== e.target) return;
    this.props.onClose();
  };

  render() {
    console.log("render");
    const { onClose } = this.props;
    return (
      <div
        className={css.drop}
        onClick={this.closeWindow}
        ref={this.createClose}
      >
        <div className={css.innerMenu}>
          <button onClick={onClose}>Close</button>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default ModalDrop;
