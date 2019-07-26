import React from 'react';
import Select from 'react-select';

const CustomSelector = ({ options, handleChange, value }) => (
  <Select options={options} onChange={handleChange} value={value} />
);

export default CustomSelector;
