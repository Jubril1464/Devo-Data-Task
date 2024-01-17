// TaskItem.js
import React,{useState} from "react";
import { useDispatch } from "react-redux";
import { deleteTask, toggleComplete,updateTask } from "../../redux/taskSlice";
import "./index.css"; // Import your CSS file

const TaskItem = ({ task }) => {
  const dispatch = useDispatch();
  const [editMode, setEditMode] = useState(false);
  const [editedTask, setEditedTask] = useState({ ...task });

  const handleDelete = () => {
    dispatch(deleteTask(task.id));
  };

  const handleToggleComplete = () => {
    dispatch(toggleComplete(task.id));
  };
  const handleEdit = () => {
    setEditMode(true);
  };
  const handleCancel = () => {
    setEditMode(false);
    // Reset editedTask to the original task details
    setEditedTask({ ...task });
  };

  const handleSave = () => {
    // Dispatch the updateTask action to update the task
    dispatch(updateTask({ id: task.id, updatedTask: editedTask }));
    setEditMode(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedTask((prevTask) => ({
      ...prevTask,
      [name]: value,
    }));
  };

  return (
    <div className="task-item-container">
      <div className={`task-item ${editMode ? 'edit-mode' : ''}`}>
        {!editMode ? ( <div>
        <div>
          <h3 className="task-name">{task.name}</h3>
          <p className="task-category">{task.category}</p>
        </div>
        <div className="btn-container">
          <button
            onClick={handleToggleComplete}
            className={`complete-button ${
              task.completed ? "completed" : "incomplete"
            }`}
          >
            {task.completed ? "Completed" : "Mark Complete"}
          </button>
          <button onClick={handleEdit} className="btn-edit">Edit</button>
          <button onClick={handleDelete} className="delete-button">
            Delete
          </button>
        </div>
        </div>): ( <div className="form-input">
          <input
            type="text"
            name="name"
            value={editedTask.name}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="category"
            value={editedTask.category}
            onChange={handleInputChange}
          />
          <button onClick={handleSave} className="btn-save">Save</button>
          <button onClick={handleCancel} className="btn-cancel">Cancel</button>
        </div>) }
       
      </div>
      {task.completed ? (
        <span className="status-complete">completed</span>
      ) : (
        <span className="status-incomplete">incomplete</span>
      )}
    </div>
  );
};

export default TaskItem;
