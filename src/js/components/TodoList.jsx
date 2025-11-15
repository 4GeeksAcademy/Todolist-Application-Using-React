import React, { useEffect, useRef, useState } from "react";

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

    // Función para eliminar una tarea
    const deleteTask = (id) => {
        const newArray = tasks.filter(t => {
            return t.id !== id;
        });
        setTasks(newArray);
    };

    // Hacer que los datos no se borren cuando recargo la página
    useEffect (() => {
        // Obtener Json del localstorage
        const savedData = localStorage.getItem("my-tasks");
        console.log("Cargando tareas desde storage:", savedData);

        if (savedData !== null) {
             // Si hay datos, los parseamos (JSON a Array) y actualizamos el estado
            const arrayRecovered = JSON.parse(savedData);
            setTasks(arrayRecovered);
        };

    }, []); // Array vacío para cargar al montar

    const firstLoad = useRef(true);

    // Guardar tareas
    useEffect (() => {
       if (firstLoad.current) {
        // No gurdar primera vez
        firstLoad.current = false;
        return;

       }
       console.log("Guardando tareas:", tasks);
       const jsonToSave = JSON.stringify(tasks);
       localStorage.setItem("my-tasks", jsonToSave);

    }, [tasks]);


    return (
        <div className="todo-container">
            <h1 className="todo-title">TodoList</h1>
            <div className="input-wrapper">
            <input
            className="todo-input"
            type="text"
            value={inputValue}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            placeholder="Write a new task"
            />

            {/* <button onClick={addTask}>Add task</button> */}
            {tasks.length === 0 ? (
                <p className="empty-message my-3">🚨 There aren't tasks, add new tasks ✍️</p>
            ) : (
                <ul className="todo-list">
                {tasks.map((t) => (
                    <li key={t.id} className="todo-item">{t.text}
                    <button
                    className="delete-btn"
                    onClick={() => deleteTask(t.id)}>x
                    </button>
                    </li>
                ))}
            </ul>
            )}
            <p className="task-counter">Total task: {tasks.length}</p>
            </div>
        </div>
    );
};


export default TodoList;