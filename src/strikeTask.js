function strikethroughDoneTask(taskId, tasks, setTasks) {
  const updateTasks = tasks.map((task) => {
    if (task.id === taskId) {
      return { ...task, done: !task.done };
    }
    return task;
  });
  setTasks(updateTasks);
}

export default strikethroughDoneTask;
