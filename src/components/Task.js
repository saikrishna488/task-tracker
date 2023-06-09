import React from "react";

import { FaTimes } from "react-icons/fa";

function Task({ task, onClick ,onToggle}) {
  return (
    <div className={`task ${task.reminder ? 'reminder' : ''}`} onDoubleClick={() => onToggle(task.id)}>
      <h3>
        {task.text} <FaTimes style={{ color: "red" }} onClick={() => onClick(task.id)} />{" "}
      </h3>
      <p>{task.day}</p>
    </div>
  );
}

export default Task;
