import React, { Component } from "react";
import { connect } from "react-redux";
class Draw extends Component {
  state = {};
  render() {
    const { value } = this.props;
    return <p>{value}</p>;
  }
}

const mapStateToProps = state => ({
  value: state.value
});

export default connect(mapStateToProps)(Draw);
