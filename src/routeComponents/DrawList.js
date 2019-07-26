import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const DrawList = ({ list, match, location }) => {
  console.log('local', location);
  return list.map(({ name }) => (
    <li key={name}>
      <Link
        to={{ pathname: `${match.path}/${name}`, state: { from: location } }}
      >
        {name}
      </Link>
    </li>
  ));
};

export default withRouter(DrawList);
