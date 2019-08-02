import React from "react";
import Select from "react-select";
import { connect } from "react-redux";
import { selectValue } from "../Redux/Action";
import { findFilter } from "./postSelect";
const options = [
  { value: "css", label: "css" },
  { value: "html", label: "html" },
  { value: "react", label: "react" }
];

const findOptions = value => options.find(post => post.value === value);

const PostChangeSelect = ({ value = null, onHandleChange = () => null }) => (
  <Select
    value={findOptions(value)}
    onChange={onHandleChange}
    options={options}
  />
);

const mapStateToProps = state => ({
  value: findFilter(state)
});

const mapDispatchToProps = dispatch => ({
  onHandleChange: post => dispatch(selectValue(post.value))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostChangeSelect);
