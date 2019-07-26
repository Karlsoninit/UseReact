import React from 'react';
import { Link } from 'react-router-dom';

const navStyle = {
  display: 'flex',
  justifyContent: 'center',
};

const innerLink = {
  marginRight: '20px',
  listStyle: 'none',
  fontSize: '30px',
  color: 'tomato',
};

const linkNone = {
  textDecoration: 'none',
};

const Navigation = () => (
  <ul style={navStyle}>
    <li style={innerLink}>
      <Link style={linkNone} to="/">
        Home
      </Link>
    </li>
    <li style={innerLink}>
      <Link style={linkNone} to="/about">
        About
      </Link>
    </li>
    <li style={innerLink}>
      <Link style={linkNone} to="/colections">
        Colections
      </Link>
    </li>
  </ul>
);

export default Navigation;
