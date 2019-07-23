import React from "react";

const Options = ({ options, onChange, value }) => (
  <select value={value} onChange={onChange}>
    {options.map(elem => (
      <option key={elem}>{elem}</option>
    ))}
  </select>
);

export default Options;
