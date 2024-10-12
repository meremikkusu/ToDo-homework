import React from 'react';
import { Link } from 'react-router-dom';

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
            Дедлайн: {task.deadline}
          </li>
        ))}
      </ul>
      <br />
      <Link to="/">Назад на главную</Link>
    </div>
  );
}

export default CompletedTasks;
