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
        className="edit-task"
        onClick={() => {
          handleToggleEdit(task.id);
        }}
      >
        {task.edit ? 'SAVE' : 'EDIT'}
      </button>
    </>
  );
}

export default EditButton;
