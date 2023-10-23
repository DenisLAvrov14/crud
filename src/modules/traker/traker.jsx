import React from "react";
import { BiSolidHappyBeaming, BiSolidTrash } from "react-icons/bi";
import "./traker.css";

export const Tracker = ({ tasks, markTaskAsDone, deleteTask }) => {
  return (
    <div className="list">
      <h2>List</h2>
      <ul className="traker">
        {tasks.map((task, index) => (
          <li key={index}>
            <div className="task-container">{task}</div>
            <div className="buttons">
              <button onClick={() => markTaskAsDone(index)}>
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
