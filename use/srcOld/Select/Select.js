import React from "react";
import CreateSelect from "react-select";

const Options = [
  { value: 5, label: 5 },
  { value: 10, label: 10 },
  { value: 15, label: 15 }
];

const Select = ({ value, onHandleChange }) => (
  <CreateSelect value={value} options={Options} onChange={onHandleChange} />
);

export default Select;
