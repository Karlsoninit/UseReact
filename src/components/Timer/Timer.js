/*eslint-disable*/
import React from 'react';
const Timer = ({ value, step, handleDecrement, handleIncrement }) => (
  <>
    <button onClick={() => handleIncrement(step)}>plus</button>
    <p>{value}</p>
    <button onClick={() => handleDecrement(step)}>minus</button>
  </>
);

export default Timer;
