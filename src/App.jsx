import React, { useState, useRef, useEffect } from 'react';
import './App.css';

function App() {
  const [newTask, setNewTask] = useState('');
  const [tasks, setTasks] = useState([]);
  const inputRef = useRef(null);
  const [isFocused, setIsFocused] = useState(false);

  useEffect(() => {
    if (isFocused && inputRef.current.focus) {
      inputRef.current.focus();
      inputRef.current.select();
    }
  }, [isFocused]);

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

  const countDoneTasks = () => {
    let counter = 0;
    tasks.map((task) => {
      if (task.done === true) {
        counter++;
      }
    });
    return counter;
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
                  onChange={(event) => editTask(task.id, event.target.value)}
                  ref={inputRef}
                />
              ) : (
                <input
                  type="text"
                  value={task.text}
                  className={task.done ? 'task-done' : ''}
                  readOnly
                />
              )}

              <button
                type="button"
                name="edit-task"
                onClick={() => {
                  toggleEdit(task.id);
                  setIsFocused(!isFocused);
                }}
              >
                {task.edit ? 'Save' : 'Edit'}
              </button>

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
        <h4>Done tasks: {countDoneTasks()}</h4>
        <h4>Tasks left: {tasks.length - countDoneTasks()}</h4>
      </>
    </>
  );
}

export default App;
