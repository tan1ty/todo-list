import React from 'react';
import strikethroughDoneTask from './strikeTask.js';

function CheckBox({ task, tasks, setTasks }) {
  const handleStrikethroughDoneTask = (taskId) => {
    strikethroughDoneTask(taskId, tasks, setTasks);
  };
  return (
    <input
      type="checkbox"
      checked={task.done}
      onChange={() => handleStrikethroughDoneTask(task.id)}
    />
  );
}

export default CheckBox;
