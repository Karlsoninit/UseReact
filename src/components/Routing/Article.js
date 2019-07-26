/*eslint-disable*/
import React, { Component } from 'react';
import axios from 'axios';
const params = props => props.match.params.id;

const settings = {
  width: '200px',
};
class Article extends Component {
  state = {
    item: [],
  };

  componentDidMount() {
    const id = params(this.props);
    console.log(id);
    axios
      .get(`https://restcountries.eu/rest/v2/name/${id}`)
      .then(({ data }) => this.setState({ item: data }));
  }

  render() {
    const { item } = this.state;

    // console.log(this.props.match);
    return (
      <>
        <p>Single application </p>
        {item.map(({ flag }) => (
          <img style={settings} src={flag} />
        ))}
        {/* <img src={item} /> */}
      </>
    );
  }
}

export default Article;
