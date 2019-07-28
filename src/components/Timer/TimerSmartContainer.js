import { connect } from 'react-redux';
import { increment, decrement } from './TimerAction';
import Timer from './Timer';
const mapStateToProps = state => ({
  value: state.value,
  step: state.step.value,
});

const mapDispatchToProps = dispach => ({
  handleIncrement: step => dispach(increment(step)),
  handleDecrement: step => dispach(decrement(step)),
});
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Timer);
