import React from "react";
import { BiSolidPlusCircle } from "react-icons/bi";
import { v4 as uuidv4 } from "uuid"; // Импорт функции генерации уникальных идентификаторов
import "./task.css";

const Tasker = ({ addTask, setFilter }) => {
  const [onTask, setOnTask] = React.useState("");

  const handleOnInputChange = (e) => {
    setOnTask(e.target.value);
  };

  const handleOnAddTask = () => {
    if (onTask.trim() !== "") {
      const newTask = {
        id: uuidv4(), // Генерация уникального идентификатора
        onTask: onTask,
        undone: true,
      };
      addTask(newTask);
      setOnTask("");
    }
  };

  const handleOnFilterChange = (e) => {
    setFilter(e.target.value);
  };

  return (
    <>
      <div className="tusker">
        <h2>TO DO LIST</h2>
        <div className="addtsk">
          <input type="text" value={onTask} onChange={handleOnInputChange} />
          <button className="addbtn" onClick={handleOnAddTask}>
            <BiSolidPlusCircle className="icon" />
          </button>
          <select onChange={handleOnFilterChange}>
            <option value="all">All</option>
            <option value="done">Done</option>
            <option value="undone">Undone</option>
          </select>
        </div>
      </div>
    </>
  );
};

export default Tasker;
