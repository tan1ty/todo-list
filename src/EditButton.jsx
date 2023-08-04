import { useState } from 'react';
import toggleEdit from './toggleEdit.js';

function EditButton({ task, tasks, setTasks, isFocused }) {
  const handleToggleEdit = (taskId) => {
    toggleEdit(tasks, setTasks, taskId);
  };

  return (
    <>
      <button
        type="button"
        name="edit-task"
        onClick={() => {
          handleToggleEdit(task.id);
        }}
      >
        {task.edit ? 'Save' : 'Edit'}
      </button>
    </>
  );
}

export default EditButton;
