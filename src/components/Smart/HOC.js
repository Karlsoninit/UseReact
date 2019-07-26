/*eslint-disable */
import React, { Component } from 'react';

const HOC = NewComponent => {
  return class DoubleHOC extends Component {
    state = {
      on: false,
      time: new Date().toLocaleTimeString(),
    };

    handleToogle = () => {
      this.setState(prevState => ({ on: !prevState.on }));
    };
    render() {
      const { on, time } = this.state;
      return (
        <>
          <button onClick={this.handleToogle}>{on ? 'Close' : 'Show'}</button>
          {on && <NewComponent {...this.props} time={time} />}
        </>
      );
    }
  };
};

export default HOC;

// function HOC(NewComponent) {
//   return function DoubleHOC(props) {
//     return <NewComponent {...props} />;
//   };
// }

// export default HOC;
