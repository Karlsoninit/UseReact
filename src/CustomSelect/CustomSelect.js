import React from "react";
import Select from "react-select";
import Options from "../Options.json";

const findValue = value => Options.find(elem => elem.value === value);

const CustomSelect = ({ value, handleChange }) => (
  <Select value={findValue(value)} onChange={handleChange} options={Options} />
);

export default CustomSelect;
