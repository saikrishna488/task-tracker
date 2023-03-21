import Header from "./components/Header";
import Footer from "./components/Footer";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./components/About";

function App() {
  //show Add task component
  const [showAddTask, setShowAddTask] = useState(false);

  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      const res = await fetch("http://localhost:5000/tasks");
      const data = await res.json();

      setTasks(data);
    };
    fetchTasks();
  }, []);

  //delete task
  const deleteTask = async (id) => {
    await fetch("http://localhost:5000/tasks/" + id, {
      method: "DELETE",
    });

    setTasks(
      tasks.filter((val) => {
        return val.id !== id;
      })
    );
  };

  const onToggle = async (id) => {
    const res = await fetch("http://localhost:5000/tasks/" + id);
    const data = await res.json();
    const updTask = {
      ...data,
      reminder: !data.reminder,
    };

    const res2 = await fetch("http://localhost:5000/tasks/" + id, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(updTask),
    });

    const data2 = await res2.json();

    setTasks(
      tasks.map((task) => {
        return task.id === id ? { ...task, reminder: data2.reminder } : task;
      })
    );
  };

  const addTask = async (task) => {
    const res = await fetch("http://localhost:5000/tasks", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(task),
    });
    const data = await res.json();
    setTasks([...tasks, data]);
    // const id = Math.floor(Math.random()*1000)+1
    // const newTask = {id,...task}
    // setTasks([...tasks,newTask])
  };

  return (
    <Router>
      <div className="container">
        <Header
          onAdd={() => setShowAddTask(!showAddTask)}
          showAddTask={showAddTask}
        />

        <Routes>
          <Route
            path="/"
            exact
            element={
              <>
                {showAddTask && <AddTask addTask={addTask} />}
                {tasks.length > 0 ? (
                  <Tasks
                    tasks={tasks}
                    onDelete={deleteTask}
                    addTask={AddTask}
                    onToggle={onToggle}
                  />
                ) : (
                  "No Tasks"
                )}
                <Footer />
              </>
            }
          />
          <Route path="/about" element={<About />} />
        </Routes>
        
      </div>
    </Router>
  );
}

export default App;
