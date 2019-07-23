import React, { Component, createContext } from "react";
import Modal from "./modal/Modal";
import UseApi from "./useApi/UseApi";
export const globalContext = createContext({
  theme: "green",
  date: new Date().toLocaleDateString()
});

class App extends Component {
  state = {
    theme: "red",
    date: new Date().toLocaleTimeString(),
    fn: text => alert(this.state.date)
  };
  render() {
    return (
      <>
        <Modal />
        <globalContext.Provider value={this.state}>
          <UseApi />
        </globalContext.Provider>
      </>
    );
  }
}

export default App;
