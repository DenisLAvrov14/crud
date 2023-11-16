import React, { useState } from "react";
import Tasker from "../task/task";
import Tracker from "../traker/traker";

function App() {
  const [tasks, setTasks] = useState([]); // Состояние для задач
  const [filter, setFilter] = useState("all"); // Состояние для фильтра

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const markTaskAsDone = (updatedTasks) => {
    setTasks(updatedTasks);
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  const updateTask = (updatedTasks) => {
    setTasks(updatedTasks);
  };

  return (
    <div>
      <Tasker addTask={addTask} setFilter={setFilter} />
      <Tracker
        tasks={tasks}
        markTaskAsDone={markTaskAsDone}
        deleteTask={deleteTask}
        filter={filter}
        updateTask={updateTask} // Передача функции updateTask в компонент Tracker
      />
    </div>
  );
}

export default App;
