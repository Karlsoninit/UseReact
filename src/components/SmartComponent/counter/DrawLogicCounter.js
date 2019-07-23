/* eslint-disable*/
import React from 'react';
import HOC from '../HOC';
import passProps from '../passProps';
import ValueHTML from './ValueHTML';
const DrawLogicCounter = ({ onPlus, onMinus, value }) => (
  <>
    <button onClick={onPlus}>Plus</button>
    <ValueHTML value={value} />
    <button onClick={onMinus}>Minus</button>
  </>
);

export default DrawLogicCounter;
