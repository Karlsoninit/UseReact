import CustomSelect from "./CustomSelect";
import * as actions from "../Redux/Action";
import { connect } from "react-redux";

const mapStateToProps = state => ({
  value: state.count.step
});

const mapDispatchToProps = dispatch => ({
  handleChange: step => dispatch(actions.changeValue(step.value))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CustomSelect);
