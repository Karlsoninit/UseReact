import React from 'react';
import CustomSelect from 'react-select';
import { connect } from 'react-redux';
import { stepChoice } from '../Timer/TimerAction';
const options = [
  { value: 10, label: 10 },
  { value: 5, label: 5 },
  { value: 2, label: 2 },
];

const Select = ({ value, onChange }) => (
  <CustomSelect options={options} value={value} onChange={onChange} />
);

const mapStateToProps = state => ({
  value: state.step,
});

const mapDispatchToProps = dispatch => ({
  onChange: step => dispatch(stepChoice(step)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Select);
