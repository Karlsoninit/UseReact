import React from "react";
import CustomSelect from "react-select";
import { connect } from "react-redux";
import Options from "./Options.json";
import { changeChoice } from "./SelectOption";
import * as selectore from "./SeelctCustomSelectore";

const FindOpt = value => Options.find(elem => elem.value === value);

const SelectCustom = ({ value, onHandleChange }) => (
  <CustomSelect
    value={FindOpt(value)}
    options={Options}
    onChange={onHandleChange}
  />
);

const mapStateToProps = state => ({
  value: selectore.getStep(state)
});

const mapDispatchToProps = dispatch => ({
  onHandleChange: step => dispatch(changeChoice(step))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SelectCustom);
