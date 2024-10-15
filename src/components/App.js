import React, { useState } from "react";
import ToDoData from "./ToDoData";
import "./../styles/App.css";

const arr = [];
const App = () => {
  const [addTODO, setAddTODO] = useState(arr);
  const [inputValue, setInputValue] = useState("");
  return (
    <div>
      {/* Do not remove the main div */}
      <h1>To-Do List</h1>
      <input
        type="text"
        onChange={(e) => setInputValue(e.target.value)}
      ></input>
      <button
        onClick={() => {
          if (inputValue.trim()) setAddTODO([...addTODO, inputValue]);
          // setInputValue("");
        }}
      >
        Add Todo
      </button>
      <ul>
        {addTODO.map((curr, index) => (
          <li key={index}>
            <h2>{curr}</h2>
            <button
              onClick={() => {
                const updateToDO = addTODO.filter((_, idx) => idx !== index);
                setAddTODO(updateToDO);
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
