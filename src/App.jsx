import React, { useState } from 'react';
import './App.css';

function App() {
  const [newTask, setNewTask] = useState('');
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    setTasks([
      { id: new Date().toString(), text: newTask, done: false, edit: false },
      ...tasks,
    ]);
    setNewTask('');
  };

  const strikethroughDoneTask = (taskId) => {
    const updateTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, done: !task.done };
      }
      return task;
    });
    setTasks(updateTasks);
  };

  const editTask = (taskId, updatedTask) => {
    const updateTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, text: updatedTask };
      }
      return task;
    });
    setTasks(updateTasks);
  };

  const toggleEdit = (taskId) => {
    const editedTask = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, edit: !task.edit };
      }
      return task;
    });
    setTasks(editedTask);
  };

  const deleteTask = (taskId) => {
    const tasksWithoutDeleted = tasks.filter((task) => task.id !== taskId);
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
          {tasks.map((task) => (
            <li key={task.id}>
              <input
                type="checkbox"
                checked={task.done}
                onChange={() => strikethroughDoneTask(task.id)}
              />

              {task.edit ? (
                <input
                  type="text"
                  value={task.text}
                  style={task.done ? { textDecoration: 'line-through' } : {}}
                  onChange={(event) => editTask(task.id, event.target.value)}
                />
              ) : (
                <input
                  type="text"
                  value={task.text}
                  style={task.done ? { textDecoration: 'line-through' } : {}}
                  readOnly
                />
              )}

              {task.edit === false ? (
                <button
                  type="button"
                  name="edit-task"
                  onClick={() => toggleEdit(task.id)}
                >
                  Edit
                </button>
              ) : (
                <button
                  type="button"
                  name="save-task"
                  onClick={() => toggleEdit(task.id)}
                >
                  Save
                </button>
              )}

              <button
                type="button"
                name="delete-task"
                onClick={() => deleteTask(task.id)}
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
