import React from 'react';

function CompletedTasks({ tasks }) {
  const completedTasks = tasks.filter((task) => task.completed);

  return (
    <div style={{ textAlign: 'center' }}>
      <h2>Завершенные задачи</h2>
      <ul className="task-list">
        {completedTasks.map((task, index) => (
          <li key={index}>
            <strong>{task.title}</strong> <br />
            {task.description} <br />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CompletedTasks;
