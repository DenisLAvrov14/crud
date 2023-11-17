import React, { useState } from "react";
import Tasker from "../task/task";
import Tracker from "../traсker/traсker";

function App() {
  const [tasks, setTasks] = useState([]); // Состояние для задач
  const [filter, setFilter] = useState("all"); // Состояние для фильтра

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const markTaskAsDone = (updatedTasks) => {
    setTasks(updatedTasks);
  };

  const deleteTask = (updatedTasks) => {
    setTasks(updatedTasks);
  };

  const updateTask = (updatedTasks) => {
    setTasks(updatedTasks);
  };

  const handleDeleteTask = (taskId) => {
    console.log("Deleting task with ID:", taskId);
    const updatedTasks = tasks.filter((onTask) => onTask.id !== taskId);
    deleteTask(updatedTasks);
  };

  const handleDeleteTasks = (taskIds) => {
    const updatedTasks = tasks.filter((onTask) => !taskIds.includes(onTask.id));
    deleteTask(updatedTasks);
  };

  return (
    <div>
      <Tasker addTask={addTask} setFilter={setFilter} />
      <Tracker
        tasks={tasks}
        markTaskAsDone={markTaskAsDone}
        deleteTask={deleteTask}
        filter={filter}
        updateTask={updateTask}
        deleteTasks={handleDeleteTasks} // Передача функции handleDeleteTasks в компонент Tracker
      />
    </div>
  );
}

export default App;
