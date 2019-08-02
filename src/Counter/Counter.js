import React from "react";
import { Throttle } from "react-lodash";

const style = {
  width: "100px",
  margin: "auto",
  textAlign: "center"
};
const Counter = ({ value, step, handleIncrement, hanldeDecrement }) => (
  <div style={style}>
    <button onClick={() => handleIncrement(step)}>Plus</button>
    <h1>{value}</h1>
    <button onClick={() => hanldeDecrement(step)}>Minus</button>
  </div>
);

export default Counter;
