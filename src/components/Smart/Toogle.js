/*eslint-disable */

import React, { Component } from 'react';

class Toogle extends Component {
  state = {
    on: false,
  };

  handleOn = () => {
    this.setState(prevState => ({ on: !prevState.on }));
  };
  render() {
    return this.props.children({
      on: this.state.on,
      btn: this.handleOn,
    });
  }
}

export default Toogle;
