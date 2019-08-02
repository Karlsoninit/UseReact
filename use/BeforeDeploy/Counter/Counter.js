import React from "react";
import { connect } from "react-redux";
import { increment, decrement } from "./CounterAction";
const Counter = ({ value, step, onIncrement, onDecrement }) => (
  <>
    <button onClick={() => onIncrement(step)}>Plus</button>
    <h1>{value}</h1>
    <button onClick={() => onDecrement(step)}>Minus</button>
  </>
);

const mapStateToProps = state => ({
  value: state.count.value,
  step: state.count.step.value
});

const mapDispatchToProps = dispatch => ({
  onIncrement: step => dispatch(increment(step)),
  onDecrement: step => dispatch(decrement(step))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);
