import React from "react";
import { connect } from "react-redux";
import { increment, decrement } from "./CounterAction";
import * as selectore from "./CounterSelectore";
const Counter = ({ value, step, handleIncrement, handleDecrement }) => (
  <>
    <button onClick={() => handleIncrement(step)}>Plus</button>
    <h1>{value}</h1>
    <button onClick={() => handleDecrement(step)}>Minus</button>
  </>
);

const mapStateToProps = state => ({
  value: selectore.getValue(state),
  step: selectore.getStep(state)
});

const mapDispatchToProps = dispatch => ({
  handleIncrement: step => dispatch(increment(step)),
  handleDecrement: step => dispatch(decrement(step))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);
