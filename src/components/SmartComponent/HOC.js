/*eslint-disable*/

import React, { Component } from 'react';

// const getInfo = NewComponent => {
//   return class GetInfo extends Component {
//     state = {
//       value: 21,
//     };
//     componentDidMount() {
//       console.log('componentDidMount');
//       console.log(this.props);
//     }

//     componentDidUpdate(prevProps, prevState) {
//       console.log(prevState);
//       console.log(prevProps);
//       console.log(this.state);
//     }
//     render() {
//       return <NewComponent {...this.props} />;
//     }
//   };
// };

const listOpen = NewComponent => {
  return class ListOpen extends Component {
    state = {
      on: false,
    };

    handleOpen = () => {
      this.setState(prevState => ({ on: !prevState.on }));
    };
    render() {
      const { on } = this.state;
      return (
        <>
          <button style={{ display: 'block' }} onClick={this.handleOpen}>
            {on ? 'Open' : 'Close'}
          </button>
          {on && <NewComponent {...this.props} />}
        </>
      );
    }
  };
};

export default listOpen;
