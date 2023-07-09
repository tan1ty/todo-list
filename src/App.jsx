import React, { useState } from 'react';
import './App.css';

function App() {
  const [newTask, setNewTask] = useState('');
  const [tasks, setTasks] = useState([]);
  const [classNameOfTask, setclassNameOfTask] = useState('unchecked');

  const addTask = () => {
    setTasks([newTask, ...tasks]);
    setNewTask('');
  };

  const strikethroughDoneTask = () => {
    setclassNameOfTask('checked');
  };

  const lineThrough = {
    textDecoration: classNameOfTask === 'checked' ? 'line-through' : 'none',
  };

  const deleteTask = (index) => {
    const tasksWithoutDeleted = [...tasks];
    tasksWithoutDeleted.splice(index, 1);
    setTasks(tasksWithoutDeleted);
  };

  return (
    <>
      <h1>ToDo List</h1>
      <input
        name="new-task"
        type="text"
        value={newTask}
        placeholder="What plans?"
        onChange={(event) => setNewTask(event.target.value)}
      />
      <button type="button" name="add-task" onClick={addTask}>
        Add task
      </button>
      <h2>Tasks list:</h2>
      <>
        <ul>
          {tasks.map((task, index) => (
            <li key={index} className={classNameOfTask}>
              <input type="checkbox" onClick={() => strikethroughDoneTask()} />
              <input type="text" value={task} style={lineThrough} readOnly />
              <button
                type="button"
                name="delete-task"
                onClick={() => deleteTask(index)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
        <h4>You have tasks: {tasks.length}</h4>
      </>
    </>
  );
}

export default App;
