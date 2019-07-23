import React, { Component } from 'react';

class Tooglable extends Component {
  state = {
    on: false,
  };

  handleOpen = () => {
    this.setState(prevState => ({ on: !prevState.on }));
  };

  render() {
    return this.props.children({ on: this.state.on, toogle: this.handleOpen });
  }
}

export default Tooglable;
