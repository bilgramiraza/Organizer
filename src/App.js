import './App.css';
import React, { useState } from "react";

function App() {
  const [tasks, setTasks] = useState({currentTask:"", list:[]});
  const handleChange = (e)=>{
    setTasks({
              ...tasks,
              currentTask:e.target.value
            });
  };
  const addTask = (e)=>{
    e.preventDefault();
    setTasks({list:[...tasks.list,
                    {
                      id:Date.now(),
                      task:tasks.currentTask
                    }
                   ],
              currentTask:""});
  };
  return (
    <div>
      <h1 className="App">
        Organizer
      </h1>
      <form onSubmit={addTask}>
        <input type="text" 
               name="tasks" 
               id="tasks" 
               placeholder="Enter Task ..." 
               onChange={handleChange}
               value={tasks.currentTask}/>
        <button>Add Task</button>
      </form>
      <div className="App">
        <h3>Tasks</h3>
        <ul>
          {
            tasks.list.map((item)=><li key={item.id}>{item.task}</li>)
          }
        </ul>
      </div>
    </div>
  );
}

export default App;
