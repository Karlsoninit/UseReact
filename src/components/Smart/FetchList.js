/*eslint-disable */

import React from 'react';
import List from './List';
import Toogle from './Toogle';

const FetchList = ({ data }) =>
  data.map(({ title, url, objectID }) => (
    <li key={objectID}>
      <Toogle>
        {({ on, btn }) => (
          <>
            <button onClick={btn}>{on ? 'Close' : 'Open'}</button>
            {on && <List title={title} url={url} />}
          </>
        )}
      </Toogle>
    </li>
  ));

export default FetchList;
