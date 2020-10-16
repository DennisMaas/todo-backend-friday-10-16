import React from 'react';
import AddNewToDoForm from "./AddNewToDoForm";

export default function Header({onAddToDo}) {
   //Ausgabe auf dem Screen
    return(
        <>
            <h1>Your ToDo App: It's Amazing (soon)</h1>
            <AddNewToDoForm onSubmit={onAddToDo}/>
        </>
    )
}