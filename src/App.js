import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import CompletedTasks from './CompletedTasks';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [deadline, setDeadline] = useState('');

  const addTask = () => {
    if (title.trim() && deadline.trim()) {
      const newTask = {
        title,
        description,
        deadline,
        completed: false,
      };
      setTasks([...tasks, newTask]);
      setTitle('');
      setDescription('');
      setDeadline('');
    }
  };

  const toggleComplete = (index) => {
    const newTasks = tasks.map((task, i) => {
      if (i === index) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    setTasks(newTasks);
  };

  const removeTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <Router>
      <div className="container">
        <h1>Список дел</h1>
        <nav>
          <Link to="/">Главная</Link> | <Link to="/completed">Завершенные</Link>
        </nav>

        <Routes>
          <Route
            path="/"
            element={
              <div>
                <h2>Новая задача</h2>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Название задачи"
                />
                <br />
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Описание задачи"
                ></textarea>
                <br />
                <input
                  type="date"
                  value={deadline}
                  onChange={(e) => setDeadline(e.target.value)}
                />
                <br />
                <button onClick={addTask}>Добавить задачу</button>

                <h3>Список задач</h3>
                <ul className="task-list">
                  {tasks.map((task, index) => (
                    <li key={index}>
                      <strong>{task.title}</strong> <br />
                      {task.description} <br />
                      Дедлайн: {task.deadline} <br />
                      <button onClick={() => toggleComplete(index)}>
                        {task.completed ? 'Отменить' : 'Завершить'}
                      </button>
                      <button onClick={() => removeTask(index)}>Удалить</button>
                    </li>
                  ))}
                </ul>
              </div>
            }
          />
          <Route path="/completed" element={<CompletedTasks tasks={tasks} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
