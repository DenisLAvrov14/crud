import React from "react";
import { BiSolidPlusCircle } from "react-icons/bi";
import "./tusk.css";

const Tusker = ({ addTask, setFilter }) => {
  const [task, setTask] = React.useState("");

  const handleInputChange = (e) => {
    setTask(e.target.value);
  };

  const handleAddTask = () => {
    if (task.trim() !== "") {
      addTask({ task: task, undone: true });
      setTask("");
    }
  };

  const handleFilterChange = (e) => {
    setFilter(e.target.value); // Функция изменения фильтра
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
          <select onChange={handleFilterChange}>
            <option value="all">All</option>
            <option value="done">Done</option>
            <option value="undone">Undone</option>
          </select>
        </div>
      </div>
    </>
  );
};

export default Tusker;
