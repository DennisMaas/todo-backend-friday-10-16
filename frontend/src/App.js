import Header from "./components/Header";
import ToDoView from "./components/ToDoView";
import React, {useEffect, useState} from 'react';
import axios from "axios";

function App() {
    // brauchen wir zum speichern der ToDo-Liste
    const [toDoList, setToDoList]= useState([]);

    // neues ToDO-Item erstellen
    function addNewToDo(toDo){
        console.log(toDo)
        console.log(toDoList)
        setToDoList([...toDoList,toDo])
    }
    function getList(){
        axios.get("/api/todo")      // axios.get holt immer .response.data von der API
            .then(response => response.data)        // nach .get dann die response.data auspacken und .data rausholen
            .then(data => setToDoList(data))        // dann die .data and setToDoList übergeben.
            .then(()=> console.log(toDoList))
            .catch(()=> console.log("Data fetching failed"))

    }

    useEffect(()=> {getList()},[])

    //Ausgabe auf dem Screen
    //onAddToDo kann gelöscht werden?
  return (
    <div>
      <Header onAddToDo = {addNewToDo}></Header>
      <ToDoView/>
    </div>
  );
}

export default App;