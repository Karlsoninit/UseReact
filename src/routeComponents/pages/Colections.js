/*eslint-disable */
import React, { Component } from 'react';
import { FetchAPI } from '../API';
import DravList from '../DrawList';
import CustomSelector from '../CustomSelector';
import quryString from 'query-string';
import axios from 'axios';
const Options = [
  { value: 'africa', label: 'Africa' },
  { value: 'europe', label: 'Europe' },
  { value: 'asia', label: 'Asia' },
  { value: 'oceania', label: 'Oceania' },
  { value: 'americas', label: 'Americas' },
];

const findValue = (allOptions, value) =>
  allOptions.find(el => el.value === value);

class Colections extends Component {
  state = {
    info: [],
    search: 'u',
  };

  componentDidMount() {
    console.log('componentDidMount');
    this.findName();
  }

  findName = () => {
    FetchAPI(this.state.search).then(data => this.setState({ info: data }));
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.search !== this.state.search) {
      this.findName();
      console.log(this.state.info);
    }
    if (prevProps.location.search !== this.props.location.search) {
      console.log('ok');

      axios
        .get(
          `https://restcountries.eu/rest/v2/region/${
            quryString.parse(this.props.location.search).category
          }`,
        )
        .then(data => this.setState({ info: data.data }));
    }

    console.log('prevProps', prevProps);
    console.log('this.props', this.props);
  }

  handleSubmit = evt => {
    evt.preventDefault();
    // FetchAPI(this.state.search).then(console.log);
  };

  handleGetValue = evt => {
    this.setState({ search: evt.target.value });
  };

  handleChange = evt => {
    console.log(evt);
    console.log(this.props.location);
    console.log(evt);
    this.props.history.push({
      ...this.props.location,
      search: `category=${evt.value}`,
    });
  };

  render() {
    const { info } = this.state;
    // console.log(info);
    console.log(this.props.location.search);
    console.log('can use state', this.props);
    const word = quryString.parse(this.props.location.search).category;
    const findObj = findValue(Options, word);

    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleGetValue} type="text" />
        </form>
        <p>Colections</p>
        <CustomSelector
          options={Options}
          handleChange={this.handleChange}
          value={findObj}
        />
        <DravList list={info} />
      </>
    );
  }
}

export default Colections;
