import React, { useState } from "react";

const TodoList = () => {
    // Se inicia con array vacío porque no hay tareas (Representa la lista de tareas)
    const [tasks, setTasks] = useState([]);
    // Estado para manjerar el texto que ingresaré (Representa estado de entrada input)
    const [inputValue, setInputValue] = useState("");

    // Función para manejar el cambio de input
    const handleChange = (e) => {
        setInputValue(e.target.value);
    }
    // Manejar la tecla enter
    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            addTask();
        };
    };

    // Función para añadir tarea
    const addTask = () => {
        if (inputValue.trim() === "") return;

        const newTask = {
            //Genera Id único universal
            id: crypto.randomUUID(),
            text: inputValue,
            done: false,
        };
        // Actualizo estado
        setTasks([...tasks, newTask]);

        // Limpiar campo de entrada
        setInputValue("");
    };

    return (
        <div className="todo-container">
            <h1 className="todo-title">TodoList</h1>
            <div className="input-wraper">
            <input
            className="todo-input"
            type="text"
            value={inputValue}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            placeholder="Write a new task"
            />

            {/* <button onClick={addTask}>Add task</button> */}
            <ul className="todo-list">
                {tasks.map((t) => (
                    <li key={t.id} className="todo-item">{t.text}</li>
                ))}
            </ul>
            </div>
        </div>
    );
}

export default TodoList;