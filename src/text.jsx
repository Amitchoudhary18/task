import React, { useState } from "react";

function Todo() {

    const [inputValue, setInputValue] = useState(""); const [tasks, setTasks] = useState([]);

    //In react, events are passed to event handler functions implictly(automatically)

    function handleChange(e) { //console.log(e)

        setInputValue(e.target.value);

    }

    //console.log(inputValue)

    function handleSubmit(shardha) {
        shardha.preventDefault();

    // setTasks(tasks.push(inputValue)) 
    setTasks([...tasks, inputValue]); setInputValue("")

    }

    //console.log(tasks);

    return (
        <>
        

            <form onSubmit={handleSubmit}>

                <input

                    type="text"

                    placeholder="Enter your task"

                    value={inputValue}

                    //onChange={handleChange}

                    onChange={(e) => setInputValue(e.target.value)} />

                <button type="submit">Add Task</button> </form>

            <ul>

                {tasks.map((task, index) => {

                    return (
                         < li key = { index } > { task }</li>)
        
              })}

           </ul >
        
          </>
        
        );
 
}

export default Todo;