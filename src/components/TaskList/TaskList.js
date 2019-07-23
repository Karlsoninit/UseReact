import React from "react";
import Task from "../Task/Task";
import style from "./TaskList.module.css";
const TaskList = ({
  tasks,
  onDeleteItem,
  onUpdatePriority,
  returnSaveItem
}) => (
  <ul className={style.container}>
    {tasks.map(elem => (
      <li className={style.innerItem} key={elem.id}>
        <Task
          {...elem}
          onReturnIdAndDeleteItem={() => onDeleteItem(elem.id)}
          onUpdatePriority={onUpdatePriority}
          returnSaveItem={returnSaveItem}
        />
      </li>
    ))}
  </ul>
);
export default TaskList;
