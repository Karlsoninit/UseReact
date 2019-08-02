import React from "react";
import { change } from "./SelectActions";

import Select from "./Select";
import { connect } from "react-redux";

const mapStateToProps = state => ({
  value: state.timer.step
});

const mapDispatchToProps = dispatch => ({
  onHandleChange: step => dispatch(change(step))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Select);
