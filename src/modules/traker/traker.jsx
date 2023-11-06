import React from "react";
import { BiSolidHappyBeaming, BiSolidTrash } from "react-icons/bi";
import "./traker.css";

export const Tracker = ({ tasks, markTaskAsDone, deleteTask, filter }) => {
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

  const filteredTasks = tasks.filter((task) => {
    if (filter === "done") {
      return typeof task === "object" ? task.undone === false : false;
    } else if (filter === "undone") {
      return typeof task === "object" ? task.undone === true : false;
    }
    return true; // Возвращаем все задачи при фильтре "all"
  });

  return (
    <div className="list">
      <h2>List</h2>
      <ul className="traker">
        {filteredTasks.map((task, index) => (
          <li key={index}>
            <div
              className={`task-container ${
                typeof task === "object" && task.undone ? "undone" : "done"
              }`}
            >
              {typeof task === "object" ? task.task : task}
            </div>
            <div className="buttons">
              <button onClick={() => markAsDone(index)}>
                <BiSolidHappyBeaming className="icon" />
              </button>
              <button onClick={() => deleteTask(index)}>
                <BiSolidTrash className="icon" />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Tracker;
