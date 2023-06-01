import React, { useState, useEffect } from "react";

export default function TodoList() {

    const [input, setInput] = useState('');
    const [todoList, setTodoList] = useState([]);
    const [id, setId] = useState(0);

    useEffect(() => {
        console.log("Componente montado");
        setTodoList((prevTodoList) => prevTodoList = []);
        return () => {
            console.log("Componente desmontado");
        };
    }, []);

    const handleKeyDown = (event) => {
        if (event.key === "Enter") {
            event.preventDefault();

            const newTask = {
                id: id + 1,
                task: input
            };

            setTodoList((prevTodoList) => [...prevTodoList, newTask]);
            setId((preId) => preId + 1);
            setInput("");
        }
    };
    const handleDelete = (id) => {
        setTodoList(prevTodoList => prevTodoList.filter(task => task.id !== id));
    };
    console.log(todoList.length);
    return (
        <>
            <form className="row">
                <div className="col-md-8">

                    {todoList.length === 0 ?
                        <input type="text" name="todoList" placeholder="No hay tareas, añadir tarea" className="form-control" onKeyDown={handleKeyDown} onChange={e => setInput(e.target.value)} value={input} id="validationServer01" /> : <input type="text" name="todoList" placeholder="Añadir tarea" className="form-control" onKeyDown={handleKeyDown} onChange={e => setInput(e.target.value)} value={input} id="validationServer01" />
                    }
                    <ul>
                        {todoList.map((element, index) => {
                            console.log(element.id);
                            return (<li key={element.id} onClick={() => handleDelete(element.id)}>
                                {element.task}
                            </li>);
                        })}
                    </ul>
                    <p>{todoList.length} tareas pendientes</p>
                </div>
            </form>
        </>

    )
};