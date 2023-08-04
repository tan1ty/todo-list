import { useState } from 'react';
import CheckBox from './CheckBox';
import TaskInput from './TaskInput';
import EditButton from './EditButton';
import DeleteButton from './DeleteButton';

function TaskList({ tasks, setTasks }) {
  return (
    <>
      <h2>Tasks list:</h2>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <CheckBox task={task} tasks={tasks} setTasks={setTasks} />
            <TaskInput
              task={task}
              tasks={tasks}
              setTasks={setTasks}
              isFocused={!!task.edit}
            />
            <EditButton
              task={task}
              tasks={tasks}
              setTasks={setTasks}
              isFocused={!!task.edit}
            />
            <DeleteButton task={task} tasks={tasks} setTasks={setTasks} />
          </li>
        ))}
      </ul>
    </>
  );
}

export default TaskList;
