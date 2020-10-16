import React, {useState} from "react";
import styled from "styled-components/macro";
import axios from "axios";

export default function AddNewToDoForm({onSubmit}){     // {{onSubmit}} ist die prop für diese Funktion
    // useState ist destructured in description und Setter
    const [description, setDescription] = useState("Enter Description"); // initial ist der String enthalten

    function postNewToDo(){ // diese function hat keine prop als Eingabewert
        console.log("console.log (postNewToDo)")    // wir schreiben zur Kontrolle in die Konsole
        //axios.post sendet neue Daten an die API, nämlich eine description und den ToDo-Status der description
        axios.post("/api/todo", {description:description, status:"OPEN"})
            .then(response => response.data)
            .then(onSubmit) //und zwar onSubmit. onSubmit ist ein Status des Formulars

    }

    return(
            <StyledToDoForm>
                <label>Please enter description of your new To-Do:</label><br/>
                <input onChange={event => setDescription(event.target.value)} type={"text"} value={description}/>
                <input type={"button"} value={"Add ToDo Item"} onClick={postNewToDo}/>
            </StyledToDoForm>
    )
}
    const StyledToDoForm = styled.form`


`