import React, { Component } from 'react';
import Loadable from 'react-loadable';
import Loading from '../Loading';

const DropDownLoad = Loadable({
  loader: () => import(/* webpackChunkName: "DropDown" */ '../pages/DropDown'),
  loading: Loading,
});
class About extends Component {
  state = {
    isOpen: false,
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
      <>
        <button onClick={this.handleOpen}>add about yourself</button>
        {isOpen && <DropDownLoad handleClose={this.handleClose} />}
      </>
    );
  }
}

export default About;
