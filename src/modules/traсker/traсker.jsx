import React, { useState } from "react";
import {
  BiSolidHappyBeaming,
  BiSolidTrash,
  BiTask,
  BiTaskX,
  BiEditAlt,
} from "react-icons/bi";
import "./traсker.css";

const Tracker = ({
  tasks,
  markTaskAsDone,
  deleteTask,
  filter,
  deleteTasks,
}) => {
  const [editedTask, setEditedTask] = useState({
    onTask: "",
    id: "",
    index: -1,
  });

  const markAsDone = (taskId) => {
    const updatedTasks = tasks.map((onTask) => {
      if (onTask.id === taskId && typeof onTask === "object") {
        const newTask = { ...onTask, undone: !onTask.undone };
        return newTask;
      }
      return onTask;
    });
    markTaskAsDone(updatedTasks);
  };

  const handleTaskUpdate = () => {
    if (editedTask.index !== -1) {
      const updatedTasks = tasks.map((onTask) => {
        if (onTask.id === editedTask.id) {
          return { ...onTask, onTask: editedTask.onTask };
        }
        return onTask;
      });
      markTaskAsDone(updatedTasks);
      setEditedTask({ onTask: "", id: "", index: -1 });
    }
  };

  const handleDeleteTask = (taskId) => {
    console.log("Deleting task with ID:", taskId);
    const updatedTasks = tasks.filter((onTask) => onTask.id !== taskId);
    deleteTask(updatedTasks);
  };

  // const handleDeleteTasks = (taskIds) => {
  //   const updatedTasks = tasks.filter((onTask) => !taskIds.includes(onTask.id));
  //   deleteTasks(updatedTasks);
  // };

  const filteredTasks = tasks.filter((onTask) => {
    if (filter === "done") {
      return typeof onTask === "object" ? !onTask.undone : false;
    } else if (filter === "undone") {
      return typeof onTask === "object" ? onTask.undone : false;
    }
    return true;
  });

  return (
    <div className="list">
      <h2>List</h2>
      <ul className="tracker">
        {filteredTasks.map((onTask, index) => (
          <li key={index}>
            <div
              className={`task-container ${
                typeof onTask === "object" && onTask.undone ? "undone" : "done"
              }`}
            >
              {index === editedTask.index ? (
                <input
                  type="text"
                  value={editedTask.onTask}
                  onChange={(e) =>
                    setEditedTask({
                      onTask: e.target.value,
                      id: editedTask.id,
                      index,
                    })
                  }
                />
              ) : typeof onTask === "object" ? (
                onTask.onTask
              ) : (
                onTask
              )}
            </div>
            <div className="buttons">
              <button onClick={() => markAsDone(onTask.id)}>
                <BiSolidHappyBeaming className="icon" />
              </button>
              <button onClick={() => handleDeleteTask(onTask.id)}>
                <BiSolidTrash className="icon" />
              </button>
              {index !== editedTask.index && (
                <button
                  onClick={() =>
                    setEditedTask({
                      onTask: onTask.onTask,
                      id: onTask.id,
                      index,
                    })
                  }
                >
                  <BiEditAlt className="icon" />
                </button>
              )}
              {index === editedTask.index && (
                <>
                  <button onClick={handleTaskUpdate}>
                    <BiTask className="icon" />
                  </button>
                  <button
                    onClick={() =>
                      setEditedTask({ onTask: "", id: "", index: -1 })
                    }
                  >
                    <BiTaskX className="icon" />
                  </button>
                </>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Tracker;
