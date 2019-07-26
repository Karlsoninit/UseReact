/*eslint-disable */
import React, { Component } from 'react';
import Axios from 'axios';

const findName = props => props.match.params.name;
const styleFlag = {
  width: '400px',
};
class Article extends Component {
  state = {
    info: [],
  };

  componentDidMount() {
    console.log('componentDidMount');
    const id = findName(this.props);
    console.log(id);
    Axios.get(`https://restcountries.eu/rest/v2/name/${id}`).then(({ data }) =>
      this.setState({ info: data }),
    );
  }

  onBack = () => {
    console.log(this.props.history.push('/articles'));
  };

  render() {
    const { info } = this.state;
    // console.log(this.props.match.params.name);
    return (
      <>
        <p>single page application</p>
        {info.map(({ flag, name }) => (
          <img style={styleFlag} key={name} src={flag} />
        ))}
        <button onClick={this.onBack}>Comme back</button>
      </>
    );
  }
}

export default Article;
