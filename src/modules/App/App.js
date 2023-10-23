import "./App.css";
import React, { useState } from "react";
import Tusker from "../tusk/tusk";
import Tracker from "../traker/traker";

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const markTaskAsDone = (index) => {
    // Можно обновить задачу, пометив её как выполненную
    // и здесь же удалить задачу, если это необходимо
    // Например:
    // const updatedTasks = [...tasks];
    // updatedTasks[index] = '✓ ' + updatedTasks[index];
    // setTasks(updatedTasks);
  };

  const deleteTask = (index) => {
    // Удалить задачу по индексу
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div className="App">
      <Tusker
        addTask={addTask}
        tasks={tasks}
        markTaskAsDone={markTaskAsDone}
        deleteTask={deleteTask}
      />
      <Tracker
        tasks={tasks}
        markTaskAsDone={markTaskAsDone}
        deleteTask={deleteTask}
      />
    </div>
  );
}

export default App;
