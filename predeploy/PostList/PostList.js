import React from "react";
import { connect } from "react-redux";

const style = {
  display: "block"
};

const PostList = ({ items = [] }) => (
  <ul>
    {items.map(elem => (
      <li key={elem.tag}>
        {elem.info}
        <button style={style}>delete</button>
      </li>
    ))}
  </ul>
);

const mapStateToProps = state => ({
  items: state.posts.items
});

export default connect(mapStateToProps)(PostList);
