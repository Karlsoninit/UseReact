/*eslint-disable */
import React, { Component } from 'react';
import { FetchAPI } from '../API';
const newName = text => text.match.params.name;

class AlonePage extends Component {
  state = {
    aloneCountry: [],
  };

  componentDidMount() {
    FetchAPI(newName(this.props)).then(data =>
      this.setState({ aloneCountry: data }),
    );
  }

  handleBack = () => {
    // this.props.history.push('/colections');
    this.props.history.push(this.props.location.state.from);
  };

  render() {
    const { aloneCountry } = this.state;
    console.log(this.state.aloneCountry);
    console.log(this.props);
    return (
      <>
        <p>Work</p>
        <button onClick={this.handleBack}>Back</button>
        {aloneCountry.map(({ flag, name }) => (
          <img key={name} src={flag} />
        ))}
        <p>{JSON.stringify(this.props.location.state)}</p>
      </>
    );
  }
}

export default AlonePage;
