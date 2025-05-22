import React, { useState, useEffect } from "react"; 
import ToDoForm from "../js/components/ToDoForm.jsx";
import ToDoList from "../js/components/ToDoList.jsx";
import "../styles/index.css"; 

const Home = () => {
    const [tarea, setTarea] = useState([]);
    const [idCounter, setIdCounter] = useState(1);
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        document.body.className = darkMode ? "dark-mode" : "light-mode";
    }, [darkMode]);

    function añadirTarea(nuevaTarea) {
        setTarea(prev => [...prev, { tarea: nuevaTarea, idCounter }]);
        setIdCounter(prev => prev + 1);
    }

    function eliminartarea(id) {
        setTarea(prev => prev.filter(t => t.idCounter !== id));
    }

    return (
        <div className="container">
            <div className="theme-toggle">
                <button onClick={() => setDarkMode(!darkMode)}>
                    {darkMode ? "🌙" : "🌞"}
                </button>
            </div>
            <h2>Lista de Tareas</h2>
            <ToDoForm añadirTarea={añadirTarea} />
            <ToDoList toDoArray={tarea} eliminartarea={eliminartarea} />
        </div>
    );
};

export default Home;
