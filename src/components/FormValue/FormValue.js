import React, { Component } from 'react';
import { connect } from 'react-redux';
import { findPost } from '../../Redux/Action';
class FormValue extends Component {
  onHandleChange = evt => {
    this.props.value(evt.target.value);
    // console.log('ho-ho', evt.target.value);
  };

  // onHandleSubmit = evt => {
  //   evt.preventDefault();
  //   this.onHandleChange();
  // };
  render() {
    return <input onChange={this.onHandleChange} />;
  }
}

// const mapStateToProps = (state) => ({

// })

const mapDispatchToProps = dispatch => ({
  value: value => dispatch(findPost(value)),
});

export default connect(
  null,
  mapDispatchToProps,
)(FormValue);
