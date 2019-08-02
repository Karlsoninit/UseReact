import { connect } from "react-redux";
import { increment, decrement } from "./TimerActions";
import Timer from "./Timer";
const mapStateToProps = state => ({
  value: state.timer.value,
  step: state.timer.step.value
});

const mapDispatchToProps = dispatch => ({
  handleIncrement: step => dispatch(increment(step)),
  handleDecrement: step => dispatch(decrement(step))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Timer);
