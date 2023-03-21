import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import React, { useState } from "react";

function App() {
  //show Add task component
  const [showAddTask,setShowAddTask] = useState(false)

  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "sai",
      day: "Feb 6th",
      reminder: true,
    },
    {
      id: 2,
      text: "luffy",
      day: "Feb 7th",
      reminder: true,
    },
    {
      id: 3,
      text: "nami",
      day: "Feb 8th",
      reminder: true,
    },
    {
      id: 4,
      text: "shanks",
      day: "Feb 9th",
      reminder: true,
    },
  ]);

  const deleteTask = (id) => {
    setTasks(
      tasks.filter((val) => {
        return val.id !== id;
      })
    );
  };

  const onToggle = (id)=>{
    setTasks(tasks.map((task)=>{
      return task.id === id ? {...task,reminder:!task.reminder} : task
    }))
  }

  const addTask = (task)=>{
    const id = Math.floor(Math.random()*1000)+1
    const newTask = {id,...task}
    setTasks([...tasks,newTask])
  }

  return (
    <>
      <div className="container">
        <Header onAdd={()=> setShowAddTask(!showAddTask)} showAddTask={showAddTask} />
        {showAddTask && <AddTask addTask={addTask} />}
        {tasks.length > 0 ? (
          <Tasks tasks={tasks} onDelete={deleteTask} addTask={AddTask} onToggle={onToggle} />
        ) : (
          "No Tasks"
        )}
      </div>
    </>
  );
}

export default App;
