import './App.css';
import React, { useState } from 'react';
import ToDoList from './ToDoList';

const App = () => {
  const [inputList, setInputList] = useState("");
  const [Items, setItems] = useState([]);

  const itemEvent = (event) => {
    setInputList(event.target.value)
  };

  let arr = []
  const listofItems = () => {
    setItems((oldItems) => {
      return [...oldItems, inputList];
    });
    setInputList("");
  };
  return (
    <>
      <div className='main_div'>
        <div className='center_div'>
          <br />
          <h1>ToDo List</h1>
          <br />
          <input type="text" placeholder='Add a items'
            onChange={itemEvent} value={inputList}
          />
          <button onClick={listofItems}>
            +
          </button>
          <ol>
            {Items.map((itemval) => {
              return <ToDoList text={itemval}/>
            })}
          </ol>
        </div>
      </div>
    </>
  )
}

export default App;
