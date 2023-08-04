function deleteTask(tasks, setTasks, taskId) {
  const tasksWithoutDeleted = tasks.filter((task) => task.id !== taskId);
  setTasks(tasksWithoutDeleted);
}

export default deleteTask;
