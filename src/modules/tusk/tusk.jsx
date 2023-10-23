import React, { useState } from "react";
import { BiSolidPlusCircle } from "react-icons/bi";
import "./tusk.css";

const Tusker = ({ addTask, tasks, markTaskAsDone, deleteTask }) => {
  const [task, setTask] = useState("");

  const handleInputChange = (e) => {
    setTask(e.target.value);
  };

  const handleAddTask = () => {
    if (task.trim() !== "") {
      addTask(task);
      setTask("");
    }
  };

  return (
    <>
      <div className="tusker">
        <h2>TO DO LIST</h2>
        <div className="addtsk">
          <input type="text" value={task} onChange={handleInputChange} />
          <button className="addbtn" onClick={handleAddTask}>
            <BiSolidPlusCircle className="icon" />
          </button>
        </div>
      </div>
    </>
  );
};

export default Tusker;
