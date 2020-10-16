import Header from "./components/Header";
import ToDoView from "./components/ToDoView";
import React, {useEffect, useState} from 'react';
import axios from "axios";

function App() {
    // useState beginnt mit einem leeren Array, der State ist destructured in toDoList
    // und setToDoList
    const [toDoList, setToDoList]= useState([]);

    // neues ToDo-Item erstellen
    function addNewToDo(toDo){
        console.log(toDo)
        console.log(toDoList)
        setToDoList([...toDoList,toDo])
    }
    function getList(){
        axios.get("/api/todo")      // 2. axios.get holt immer .response.data von der API
            .then(response => response.data)        // 2. nach .get dann die response.data auspacken und .data rausholen
            .then(data => setToDoList(data))        // 2. dann die .data and setToDoList übergeben.
            .then(()=> console.log(toDoList))
            .catch(()=> console.log("Data fetching failed"))

    }
    // 1. wenn useEffect leer ist, passiert es on first render
    // 1. die function getList wird ausgeführt und holt die response.data
    useEffect(()=> {getList()},[])

    //Ausgabe auf dem Screen
  return (
    <div>
      <Header onAddToDo = {addNewToDo}></Header>
      <ToDoView/>
    </div>
  );
}

export default App;