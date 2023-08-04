import { useState } from 'react';
import AddTaskUtil from './AddTask';
import TaskStatistics from './TaskStatistics';
import TaskList from './TaskList';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);

  return (
    <>
      <AddTaskUtil tasks={tasks} setTasks={setTasks} />
      <TaskList tasks={tasks} setTasks={setTasks} />
      <TaskStatistics tasks={tasks} />
    </>
  );
}

export default App;
