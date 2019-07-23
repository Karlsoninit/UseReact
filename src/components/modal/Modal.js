import React, { Component } from "react";
import ModalDrop from "./ModalDrop";
class Modal extends Component {
  state = {
    isOpen: false
  };

  handleOpen = () => {
    this.setState({ isOpen: true });
  };
  handleClose = () => {
    this.setState({ isOpen: false });
  };

  render() {
    const { isOpen } = this.state;
    return (
      <div>
        <button onClick={this.handleOpen}>Open</button>
        {isOpen && (
          <ModalDrop onClose={this.handleClose}>
            <h1>dropdown menu</h1>
            <p>Work</p>
          </ModalDrop>
        )}
      </div>
    );
  }
}

export default Modal;
