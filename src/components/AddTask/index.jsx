import React, { useState,useEffect } from "react";
import "./index.css";
import { useDispatch } from "react-redux";
import { addTask, fetchTasks } from "../../redux/slices/taskSlice";

const AddTask = ({ onAdd }) => {
  const [newTask, setNewTask] = useState({ title: '', description: '' });

  const dispatch = useDispatch();

 
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewTask((prevTask) => ({ ...prevTask, [name]: value }));
  };

   const handleAddTask = (e) => {
    e.preventDefault()
    if (newTask.title.trim() !== '' && newTask.description.trim() !== '') {
      dispatch(addTask(newTask));
      setNewTask({ title: '', description: '' });
    } else {
      alert('Please fill in both title and description');
    }
  };

  return (
    <form onSubmit={handleAddTask} className="task-form">
      <input
        type="text"
        name="title"
        placeholder="Task Title"
        value={newTask.title}
        onChange={handleInputChange}
        className="input-field"
      />
      <input
        type="text"
        placeholder="Task Description"
        name="description"
        value={newTask.description}
        onChange={handleInputChange}
        className="input-field"
      />
      <button type="submit" className="submit-button">
        Add Task
      </button>
    </form>
  );
};

export default AddTask;
