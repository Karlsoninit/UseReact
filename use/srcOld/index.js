import React from "react";
import ReactDOM from "react-dom";
import Timer from "./Timer/TimerContainer";
import { Provider } from "react-redux";
import store from "./Redux/Store";
import Select from "./Select/ConnectSelectore";
const App = () => (
  <>
    <Timer />
    <Select />
  </>
);

// ReactDOM.render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
//   document.getElementById("root")
// );
