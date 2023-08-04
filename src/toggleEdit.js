function toggleEdit(tasks, setTasks, taskId) {
  const editedTask = tasks.map((task) => {
    if (task.id === taskId) {
      return { ...task, edit: !task.edit };
    }
    return task;
  });
  setTasks(editedTask);
}

export default toggleEdit;
