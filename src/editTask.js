function editTask({ taskId, updatedTask, tasks = [], setTasks }) {
  const updateTasks = tasks.map((task) => {
    if (task.id === taskId) {
      return { ...task, text: updatedTask };
    }
    return task;
  });
  setTasks(updateTasks);
}

export default editTask;
