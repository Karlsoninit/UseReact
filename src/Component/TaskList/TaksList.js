import React from "react";
import Task from "../Task/Task";
const TaskList = ({ tasks, DeleteElement }) =>
  tasks.length > 0 && (
    <ul>
      {tasks.map(task => (
        <li key={task.id}>
          <Task text={task.text} DeleteElement={() => DeleteElement(task.id)} />
        </li>
      ))}
    </ul>
  );

export default TaskList;
