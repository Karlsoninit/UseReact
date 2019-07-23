import React from "react";
import style from "./Search.module.css";
const Search = ({ onSearch }) => (
  <input className={style.searchForm} type="text" onChange={onSearch} />
);

export default Search;
