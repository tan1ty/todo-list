import React from 'react';
import deleteTask from './deleteTask.js';

function DeleteButton({ task, tasks, setTasks }) {
  const handleDeleteTask = (taskId) => {
    deleteTask(tasks, setTasks, taskId);
  };

  return (
    <button
      type="button"
      name="delete-task"
      onClick={() => handleDeleteTask(task.id)}
    >
      Delete
    </button>
  );
}

export default DeleteButton;
