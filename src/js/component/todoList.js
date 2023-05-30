
import React, { useState, useEffect } from "react";

export default function TodoList() {

    const [input, setInput] = useState('Añadir tarea');
    const [todoList, setTodoList] = useState([]);

    const handleKeyDown = (event) => {
        if (event.key === "Enter") {
            event.preventDefault();
            if (input.trim() !== "") {
                setTodoList((preTodoList) => [...preTodoList, input.trim()]);
                setInput("Qué tarea quieres hacer?");
            }
        }
    };
  
    const handleItemClick = (id) => {

         
    };
    return (
        <>
            <form class="row">
                <div className="col-md-8">
                    <input type="text" name="todoList" className="form-control" onKeyDown={handleKeyDown} onChange={e => setInput(e.target.value)} value={input} id="validationServer01" />
                    <ul>
                        {todoList.map((element, index) => (
                              <li key={element.id} onClick={() => handleItemClick(element.id)}>
                              {element.task}
                              </li>
                        ))}
                    </ul>
                </div>
            </form>
        </>

    )
};