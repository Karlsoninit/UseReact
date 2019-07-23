import React from "react";

const Task = ({ text, DeleteElement, complited }) => {
  return (
    <div>
      <p>{text}</p>
      <button type="button" onClick={DeleteElement}>
        Delete
      </button>
      <select name="priority">
        <option value="Low">Low</option>
        <option value="Normal">Normal</option>
        <option value="Hight">Hight</option>
      </select>
      <input type="checkbox" checked={complited} />
    </div>
  );
};

export default Task;
