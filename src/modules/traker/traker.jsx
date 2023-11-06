import React, { useState } from "react";
import { BiSolidHappyBeaming, BiSolidTrash } from "react-icons/bi";
import "./traker.css";

const Tracker = ({ tasks, markTaskAsDone, deleteTask, filter }) => {
  const [editedTask, setEditedTask] = useState({ task: "", index: -1 });

  const markAsDone = (index) => {
    const updatedTasks = tasks.map((task, i) => {
      if (i === index && typeof task === "object") {
        const newTask = { ...task, undone: !task.undone };
        return newTask;
      }
      return task;
    });
    markTaskAsDone(updatedTasks);
  };

  const handleTaskUpdate = () => {
    if (editedTask.index !== -1) {
      const updatedTasks = tasks.map((task, i) => {
        if (i === editedTask.index) {
          return { ...task, task: editedTask.task };
        }
        return task;
      });
      markTaskAsDone(updatedTasks);
      setEditedTask({ task: "", index: -1 });
    }
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === "done") {
      return typeof task === "object" ? !task.undone : false;
    } else if (filter === "undone") {
      return typeof task === "object" ? task.undone : false;
    }
    return true;
  });

  return (
    <div className="list">
      <h2>List</h2>
      <ul className="tracker">
        {filteredTasks.map((task, index) => (
          <li key={index}>
            <div
              className={`task-container ${
                typeof task === "object" && task.undone ? "undone" : "done"
              }`}
            >
              {index === editedTask.index ? (
                <input
                  type="text"
                  value={editedTask.task}
                  onChange={(e) =>
                    setEditedTask({ task: e.target.value, index })
                  }
                />
              ) : typeof task === "object" ? (
                task.task
              ) : (
                task
              )}
            </div>
            <div className="buttons">
              <button onClick={() => markAsDone(index)}>
                <BiSolidHappyBeaming className="icon" />
              </button>
              <button onClick={() => deleteTask(index)}>
                <BiSolidTrash className="icon" />
              </button>
              <button onClick={() => setEditedTask({ task: task.task, index })}>
                Edit
              </button>
              {index === editedTask.index && (
                <button onClick={handleTaskUpdate}>Save</button>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Tracker;
