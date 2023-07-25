import React from 'react';

function TaskStatistics({ tasks }) {
  const countDoneTasks = () => {
    let counter = 0;
    tasks.map((task) => {
      if (task.done === true) {
        counter++;
      }
    });
    return counter;
  };

  const doneTskCount = countDoneTasks();

  return (
    <>
      <h4>You have tasks: {tasks.length}</h4>
      <h4>Done tasks: {doneTskCount}</h4>
      <h4>Tasks left: {tasks.length - doneTskCount}</h4>
    </>
  );
}

export default TaskStatistics;
