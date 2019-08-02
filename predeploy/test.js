import React, { Component } from "react";
import { connect } from "react-redux";
import { increment, decrement } from "./Counter/CounterAction";
class Test extends Component {
  state = {
    isOpen: false
  };

  handleClick = () => {
    this.setState(prevState => ({ isOpen: !prevState.isOpen }));
  };
  render() {
    const { isOpen } = this.state;
    const { value, plus } = this.props;
    return (
      <>
        <button onClick={plus}>plus</button>
        <button onClick={this.handleClick}>Open</button>
        {isOpen && <p>{value}</p>}
      </>
    );
  }
}

const mapStateToProps = state => ({
  value: state.count.value
});

const mapDispatchToProps = dispatch => ({
  plus: () => dispatch(increment(5))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Test);
