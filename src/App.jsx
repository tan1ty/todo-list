import React, { useState } from 'react';
import './App.css';

function App() {
  const [newTask, setNewTask] = useState('');
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    setTasks([newTask, ...tasks]);
    setNewTask('');
  };

  const deleteTask = (index) => {
    const tasksWithoutDeleted = [...tasks];
    tasksWithoutDeleted.splice(index, 1);
    setTasks(tasksWithoutDeleted);
  };

  return (
    <>
      <h1>ToDo List</h1>
      <form>
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
      </form>
      <h2>Tasks list:</h2>
      <>
        <ul>
          {tasks.map((task, index) => (
            <li key={index}>
              <input type="checkbox" value="task" />
              <input value={task} readOnly />
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
        //<h4>Сompleted tasks: </h4>
        //<h4>Tasks left: </h4>
      </>
    </>
  );
}

export default App;
