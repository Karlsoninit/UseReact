import React from 'react';

const style = {
  width: '400px',
  height: '200px',
  border: '1px solid red',
  margin: 'auto',
};

const DropDown = ({ handleClose }) => (
  <div style={style}>
    <button onClick={handleClose}>Close</button>
    <p>write ...</p>
    <input />
  </div>
);

export default DropDown;
