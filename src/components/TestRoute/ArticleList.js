import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const ArticleList = ({ info, match }) => {
  console.log('!!!!!!!!', match.url);
  return (
    <ul>
      {info.map(({ name }) => (
        <li key={name}>
          <Link to={`${match.url}/${name}`}>{name}</Link>
        </li>
      ))}
    </ul>
  );
};

export default withRouter(ArticleList);
