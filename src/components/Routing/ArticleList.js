/*eslint-disable*/
import React from 'react';
import { Link } from 'react-router-dom';
const ArticleList = ({ list = [] }) => (
  <ul>
    {list.map(({ name, capital }) => (
      <li key={capital}>
        <Link to={`/article/${name}`}>{name}</Link>
      </li>
    ))}
  </ul>
);

export default ArticleList;
