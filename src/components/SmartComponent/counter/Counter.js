/*eslint-disable*/
import React, { Component } from 'react';
import axios from 'axios';
import DrawLogicCounter from './DrawLogicCounter';
import FetchData from '../FetchData';
class Counter extends Component {
  state = {
    count: 0,
    data: [],
  };

  componentDidMount() {
    console.log('componentDidMount');
    axios
      .get('http://hn.algolia.com/api/v1/search?query=react')
      .then(({ data }) => this.setState({ data: data.hits }));
  }

  handlePlus = () => {
    this.setState(prevState => ({ count: prevState.count + 1 }));
  };

  handleMinus = () => {
    this.setState(prevState => ({ count: prevState.count - 1 }));
  };

  render() {
    const { count, data } = this.state;
    return (
      <>
        <FetchData data={data} />
        <DrawLogicCounter
          value={count}
          onPlus={this.handlePlus}
          onMinus={this.handleMinus}
        />
      </>
    );
  }
}

export default Counter;
