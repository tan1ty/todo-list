import React from 'react';
import editTask from './editTask.js';
import useFocusEffect from './useFocusEffect.js';

function TaskInput({ task, tasks, setTasks, isFocused }) {
  const { inputRef, value, handleChange } = useFocusEffect({
    isFocused,
    initialValue: task.text,
  });

  const handleEditTask = (taskId, updatedTask) => {
    editTask({ taskId, updatedTask, tasks, setTasks });
  };
  const handleBlur = (e) => {
    handleEditTask(task.id, e.target.value);
  };

  return (
    <input
      type="text"
      value={value}
      onBlur={handleBlur}
      onChange={handleChange}
      disabled={!task.edit}
      className={task.done ? 'task-done' : ''}
      ref={inputRef}
    />
  );
}

export default TaskInput;
