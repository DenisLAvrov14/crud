import React, { useState } from "react";
import {
  BiSolidHappyBeaming,
  BiSolidTrash,
  BiTask,
  BiTaskX,
  BiEditAlt,
} from "react-icons/bi";
import "./traker.css";

const Tracker = ({ tasks, markTaskAsDone, deleteTask, filter }) => {
  const [editedTask, setEditedTask] = useState({ onTask: "", index: -1 });

  const markAsDone = (index) => {
    const updatedTasks = tasks.map((onTask, i) => {
      if (i === index && typeof onTask === "object") {
        const newTask = { ...onTask, undone: !onTask.undone };
        return newTask;
      }
      return onTask;
    });
    markTaskAsDone(updatedTasks);
  };

  const handleTaskUpdate = () => {
    if (editedTask.index !== -1) {
      const updatedTasks = tasks.map((onTask, i) => {
        if (i === editedTask.index) {
          return { ...onTask, onTask: editedTask.onTask };
        }
        return onTask;
      });
      markTaskAsDone(updatedTasks);
      setEditedTask({ onTask: "", index: -1 });
    }
  };

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
                    setEditedTask({ onTask: e.target.value, index })
                  }
                />
              ) : typeof onTask === "object" ? (
                onTask.onTask
              ) : (
                onTask
              )}
            </div>
            <div className="buttons">
              <button onClick={() => markAsDone(index)}>
                <BiSolidHappyBeaming className="icon" />
              </button>
              <button onClick={() => deleteTask(index)}>
                <BiSolidTrash className="icon" />
              </button>
              {index !== editedTask.index && (
                <button
                  onClick={() =>
                    setEditedTask({ onTask: onTask.onTask, index })
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
                    onClick={() => setEditedTask({ onTask: "", index: -1 })}
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
