import React, { useState } from "react";
import ToDoItem from "./ToDoItem";
import DoneItem from "./DoneItem";
import InputArea from "./InputArea";

function App() {
  
  const [items, setItems] = useState(JSON.parse(sessionStorage.getItem('todoList')) || []);
  const [doneItems, setDoneItems] = useState(JSON.parse(sessionStorage.getItem('doneList')) || []);

  function addItem(inputText) {
    setItems((prevItems) => {
      sessionStorage.setItem('todoList',JSON.stringify([inputText , ...prevItems]));
      return [inputText , ...prevItems];
    });
  }

  function deleteItem(id) {
    const tempArr = items;
    tempArr.filter((item,index) => {
      return index !== id;
    });
    setItems((prevItems) => {
      return prevItems.filter((item, index) => {
        if(index === id){
          setDoneItems((prevDoneItems) => {
            sessionStorage.setItem('doneList',JSON.stringify([item , ...prevDoneItems]));
            return [item , ...prevDoneItems];
          });
          console.log(doneItems);
        }
        return index !== id;
      });
    });
    sessionStorage.setItem('todoList',JSON.stringify(tempArr));
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <InputArea checkClick={addItem} />
      <div>
        <ul>
          {items.map((todoItem, index) => (
            <ToDoItem
              key={index}
              id={index}
              text={todoItem}
              onChecked={deleteItem}
            />
          ))}
        </ul>
        <ul className="done">
          {doneItems.map((doneItem, index) => (
            <DoneItem
              key={index}
              text={doneItem}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
