// TaskForm.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../../redux/taskSlice';
import './index.css'; // 

const TaskForm = () => {
  const dispatch = useDispatch();
  const [taskName, setTaskName] = useState('');
  const [taskDescription, setTaskDescription] = useState('');

  const handleAddTask = () => {
    if (taskName.trim() !== '' && taskDescription.trim() !== '') {
      dispatch(addTask({ name: taskName, category: taskDescription }));
      setTaskName('');
      setTaskDescription('');
    }
    else {
        alert('Please fill in all field')
    }
  };

  return (
    <div className="task-form">
      <h2 className="sub-heading">Add Task</h2>
      <div className="form-row">
        <input
          type="text"
          placeholder="Task Name"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
          className="input-field"
          
        />
        <input
          type="text"
          placeholder="Description"
          value={taskDescription}
          onChange={(e) => setTaskDescription(e.target.value)}
          className="input-field"
         
        />
        <button
          onClick={handleAddTask}
          className="add-button"
        >
          Add Task
        </button>
      </div>
    </div>
  );
};

export default TaskForm;
