import React, { useState, useRef, useEffect } from 'react';
import './App.css';

function App() {
  const [newTask, setNewTask] = useState('');
  const [tasks, setTasks] = useState([]);
  const inputRefs = useRef([]);

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

  const createInputRef = (taskId) => {
    const inputRef = React.createRef();
    inputRefs.current.push({ id: taskId, ref: inputRef });
    return inputRef;
  };

  const focusInput = (ref) => {
    if (ref && ref.current) {
      ref.current.focus();
    }
  };

  useEffect(() => {
    inputRefs.current.forEach((refObj) => {
      if (refObj.id === tasks[tasks.length - 1]?.id) {
        focusInput(refObj.refObj);
      }
    });
  }, [tasks]);

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
                  ref={createInputRef(task.id)}
                  onFocus={(e) => e.currentTarget.select()}
                />
              ) : (
                <input
                  type="text"
                  value={task.text}
                  className={task.done ? 'task-done' : ''}
                  readOnly
                />
              )}

              {task.edit === false ? (
                <button
                  type="button"
                  name="edit-task"
                  onClick={() => {
                    toggleEdit(task.id);
                    focusInput(
                      inputRefs.current.find((refObj) => refObj.id === task.id)
                        ?.ref
                    );
                  }}
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
        <h4>Done tasks: {countDoneTasks()}</h4>
        <h4>Tasks left: {tasks.length - countDoneTasks()}</h4>
      </>
    </>
  );
}

export default App;
