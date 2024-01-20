
import React, { useState } from "react";
import './../styles/App.css';
import Task from "./Task";
import "../styles/App.css";

const App = () => {

  const [taskName, setTaskName] = useState("");
  const [task, setTask] = useState([]);

  // console.log(task);

  function typeTask(e){
    setTaskName(e.target.value);
  }

  function addTask(e){
    e.preventDefault();
    setTask([...task, taskName]);
    setTaskName("");
    
  }

  function deleteTask(e){
    let arr = [...task];
    arr.splice(e.target.parentNode.id, 1)
    setTask(arr);
  }

  return (
    <div>
      <h1 className="heading">To-Do-List</h1>
      <form>
        <input type="text" placeholder="Enter the task" value={taskName} onChange={typeTask}></input>
        <button type="submit" onClick={addTask}> Add Todo </button>
      </form>

      <ul className="task-list">
        {
            task.map((item, index) => {
              return(
              <li key={index} id={index} className="task">
                <p> {item} </p>
                <button onClick={deleteTask}> Delete </button>
              </li>
              )
            })

        }
      </ul>

    </div>
  )
}

export default App
