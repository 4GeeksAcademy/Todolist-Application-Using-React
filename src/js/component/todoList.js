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
            
            <form className="row d-flex justify-content-center mt-4">
                <div className="col-md-6">

                    {todoList.length === 0 ?
                        <input type="text" name="todoList" placeholder="No hay tareas, añadir tarea" className="form-control text-center" onKeyDown={handleKeyDown} onChange={e => setInput(e.target.value)} value={input} id="validationServer01" /> : <input type="text" name="todoList" placeholder="Añadir tarea" className="form-control" onKeyDown={handleKeyDown} onChange={e => setInput(e.target.value)} value={input} id="validationServer01" />
                    }
                    <ol className  ='list-group-numbered card p-0'>
                        {todoList.map((element, index) => {
                            console.log(element.id);
                            return (<li className="list-group-item card-body border p-0" key={element.id} onClick={() => handleDelete(element.id)}>
                                {element.task}
                            </li>);
                        })}
                    </ol>
                    <p>{todoList.length} tareas pendientes</p>
                </div>
            </form>
        </>

    )
};