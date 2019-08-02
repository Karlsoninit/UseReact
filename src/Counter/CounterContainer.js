import Counter from "./Counter";
// import * as actions from "../Redux/Action";
import { increment } from "../Redux/Action";
import { compose } from "redux";
import { connect } from "react-redux";
import reRender from "../reRender";
import * as select from "./CounterSelect";
const mapStateToProps = state => ({
  value: state.count.value,
  step: select.getValue(state)
});

const mapDispatchToProps = dispatch => ({
  handleIncrement: step => dispatch(increment(step)),
  hanldeDecrement: step => dispatch(increment(step))
});

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(Counter);

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  reRender
)(Counter);
