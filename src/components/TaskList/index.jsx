// TaskList.js
import React from 'react';
import { useSelector } from 'react-redux';
import TaskItem from '../../components/TaskItem/index';
import './index.css'; // Import your CSS file

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks.tasks);
  

  return (
    <div className="task-list">
      <h2 className="sub-heading">Task List</h2>
      {tasks.length === 0 && <h1>Ooops no task found ☹</h1>  }
      {tasks?.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
     
    </div>
  );
};

export default TaskList;
