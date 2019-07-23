import React from "react";

const Search = ({ value, onFilterSearch }) => (
  <input type="text" value={value} onChange={onFilterSearch} />
);

export default Search;
