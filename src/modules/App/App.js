// import "./App.css";
// import React, { useState } from "react";
// import Tusker from "../tusk/tusk";
// import Tracker from "../traker/traker";

// function App() {
//   const [tasks, setTasks] = useState([]); // Состояние для задач
//   const [filter, setFilter] = useState("all"); // Состояние для фильтра

//   const addTask = (task) => {
//     setTasks([...tasks, task]);
//   };

//   const markTaskAsDone = (updatedTasks) => {
//     setTasks(updatedTasks);
//   };

//   const deleteTask = (index) => {
//     const updatedTasks = tasks.filter((_, i) => i !== index);
//     setTasks(updatedTasks);
//   };

//   return (
//     <div>
//       <Tusker addTask={addTask} setFilter={setFilter} />
//       <Tracker
//         tasks={tasks}
//         markTaskAsDone={markTaskAsDone}
//         deleteTask={deleteTask}
//         filter={filter} // Передача фильтра в компонент Tracker
//       />
//     </div>
//   );
// }

// export default App;

// App.jsx
import React, { useState } from "react";
import Tusker from "../tusk/tusk";
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

  return (
    <div>
      <Tusker addTask={addTask} setFilter={setFilter} />
      <Tracker
        tasks={tasks}
        markTaskAsDone={markTaskAsDone}
        deleteTask={deleteTask}
        filter={filter} // Передача фильтра в компонент Tracker
      />
    </div>
  );
}

export default App;
