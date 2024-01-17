// App.js
import React from 'react';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import './App.css'; // Import your CSS file

const App = () => {
  return (
    <div className="container">
      <h1 className="heading">Task Tracker</h1>
      <TaskForm />
      <TaskList />
    </div>
  );
};

export default App;
