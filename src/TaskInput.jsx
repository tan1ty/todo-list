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
    <div id="task-from-tasks">
      <input
        type="text"
        value={value}
        onBlur={handleBlur}
        onChange={handleChange}
        disabled={!task.edit}
        className={task.done ? 'task-input-done' : 'task-input'}
        ref={inputRef}
      />
    </div>
  );
}

export default TaskInput;
