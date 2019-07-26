import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => (
  <ul>
    <li>
      <Link to="/">Start</Link>
    </li>
    <li>
      <Link to="/articles">Articles</Link>
    </li>
  </ul>
);

export default Nav;
