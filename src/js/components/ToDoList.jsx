import React from "react";
import ToDoItem from "./ToDoItem";

function ToDoList({ toDoArray, eliminartarea }) {

    return (
        <ul className="task-list">
            {toDoArray.length === 0 ? (
                <p>No hay tareas pendientes.</p>
            ) : (
                toDoArray.map((toDo) => (
                    <ToDoItem 
                        key={toDo.idCounter} 
                        tarea={toDo.tarea} 
                        idCounter={toDo.idCounter} 
                        deleteTask={() => eliminartarea(toDo.idCounter)} 
                    />
                ))
            )}
        </ul>
    );
}

export default ToDoList;