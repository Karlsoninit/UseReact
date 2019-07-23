import React, { Component } from "react";
import { globalContext } from "../App";

class Search extends Component {
  state = {
    search: ""
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onGetInfo(this.state.search);
  };

  handleChange = e => {
    this.setState({ search: e.target.value });
  };
  render() {
    return (
      <globalContext.Consumer>
        {({ theme, date, fn }) => (
          <form onSubmit={this.handleSubmit}>
            <input type="text" onChange={this.handleChange} />
            <button>Submit</button>
            <p style={{ color: theme }}>{date}</p>
            <button onClick={() => fn("ho-ho")}>click</button>
          </form>
        )}
      </globalContext.Consumer>
    );
  }
}

export default Search;
