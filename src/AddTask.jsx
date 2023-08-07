import { useState } from 'react';

function AddTaskUtil({ tasks, setTasks }) {
  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    setTasks([
      { id: new Date().toString(), text: newTask, done: false, edit: false },
      ...tasks,
    ]);
    setNewTask('');
  };

  return (
    <>
      <h1>ToDo List</h1>
      <input
        className="new-task"
        type="text"
        value={newTask}
        placeholder="What plans?"
        onChange={(event) => setNewTask(event.target.value)}
      />
      <button type="button" className="add-task" onClick={addTask}>
        Add task
      </button>
    </>
  );
}

export default AddTaskUtil;
