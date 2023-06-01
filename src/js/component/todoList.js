
import { number } from "prop-types";
import React, { useState, useEffect } from "react";

export default function TodoList() {

    const [input, setInput] = useState('');
    const [todoList, setTodoList] = useState([]);
    const [id, setId] = useState(1);

    const handleKeyDown = (event) => {
        if (event.key === "Enter") {
            event.preventDefault();

            const newTask = {
                id: id,
                task: input
            };

            setTodoList((prevTodoList) => [...prevTodoList, newTask]);
            setId((preId) => preId + 1);
            setInput("");
        }
    };


    return (
        <>
            <form className="row">
                <div className="col-md-8">
                    <input type="text" name="todoList" placeholder="Añadir tarea" className="form-control" onKeyDown={handleKeyDown} onChange={e => setInput(e.target.value)} value={input} id="validationServer01" />
                    <ul>
                        {todoList.map((element, index) => {
                            <li key={element.id}>
                                {element.task}
                            </li>
                        })}
                    </ul>
                </div>
            </form>
        </>

    )
};