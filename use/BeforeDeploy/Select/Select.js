import React from "react";
import CustomSelect from "react-select";
import { connect } from "react-redux";
import Options from "./Options.json";
import { stepReducer } from "./SelectAction";
const Select = ({ value, onHandleChange }) => (
  <CustomSelect value={value} onChange={onHandleChange} options={Options} />
);

const mapStateToProps = state => ({
  value: state.count.step
});

const mapDespatchToProps = despatch => ({
  onHandleChange: step => despatch(stepReducer(step))
});

export default connect(
  mapStateToProps,
  mapDespatchToProps
)(Select);
