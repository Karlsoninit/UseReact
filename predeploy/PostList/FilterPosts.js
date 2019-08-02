import Select from "react-select";
import React from "react";
import { connect } from "react-redux";
import { changeTag } from "./PostListAction";

const TagOptions = [
  { value: "html", labrl: "html" },
  { value: "css", label: "css" },
  { value: "react", label: "react" },
  { value: "javaScript", label: "javaScript" }
];

const findValue = value => TagOptions.find(elem => elem.value === value);

const SelectPosts = ({ tagValue, onHandleChange }) => (
  <Select
    value={findValue(tagValue)}
    options={TagOptions}
    onChange={onHandleChange}
  />
);

const mapStateToProps = state => ({
  tagValue: state.posts.SelectedTag
});

const mapDispatchToProps = dispatch => ({
  onHandleChange: tag => dispatch(changeTag(tag))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SelectPosts);
