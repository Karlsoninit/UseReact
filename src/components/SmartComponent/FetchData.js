/*eslint-disable*/
import React from 'react';
import FetchList from './counter/FetchList';
import Tooglable from './counter/tooglable';
const FetchData = ({ data }) =>
  data.map(({ title }) => (
    <Tooglable>
      {({ on, toogle }) => (
        <div>
          <button onClick={toogle}>{on ? 'Open' : 'Close'}</button>
          {on && <FetchList title={title} />}
        </div>
      )}
    </Tooglable>
  ));

export default FetchData;
