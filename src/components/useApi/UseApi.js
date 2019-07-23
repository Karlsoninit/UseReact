import React, { Component } from "react";
import DrawList from "./DrawList";
import axios from "axios";
import Preloader from "./Preloader";
import Search from "./Search";
import Options from "./Options";
const API = "http://hn.algolia.com/api/v1/search?query=";

class UseApi extends Component {
  state = {
    data: [],
    preload: false,
    option: ""
  };

  componentDidMount() {
    console.log("componentDidMount");
    this.handleGetInfo();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.option !== this.state.option) {
      this.handleGetInfo(this.state.option);
    }
  }

  handleGetInfo = (text = "css") => {
    this.setState({ preload: true });
    axios
      .get(API + text)
      .then(({ data }) => this.setState({ data: data.hits }))
      .finally(() => this.setState({ preload: false }));
  };
  handleSelectValue = e => {
    this.setState({ option: e.target.value });
  };
  render() {
    const { data, preload, option } = this.state;
    console.log(data);
    console.log("double render");
    return (
      <>
        <Options
          options={["html", "css", "react", "redux", "javascript"]}
          onChange={this.handleSelectValue}
          value={option}
        />
        <Search onGetInfo={this.handleGetInfo} />
        {preload && <Preloader />}
        <DrawList data={data} />
      </>
    );
  }
}

export default UseApi;
