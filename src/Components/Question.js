import React, { useState, useEffect } from 'react';
import "../App.css"
import Pencil from '../photos/edit.png'
import Delete from '../photos/trash.svg'
import Add from '../photos/plus.svg'

let Question = (props) => {
    // [gameHistory, setGame ] = useState([])
console.log(props.id, "is the id")


const handleDelete = (e) => {
    e.preventDefault()
    let id = props.id
    fetch(`http://localhost:3000/questions/${id}`, {method: "DELETE",
    headers: {"Content-Type": "application/json"}})
    .then(resp => resp.json)
    .then((deletedItem) => {
        props.setQuestions((prevState) => {return prevState.filter(deletedItem => deletedItem.id !== id)})
    })
}

return (


    <div>
    <p className="quest-txt">{props.content} - {props.industry} 
    <br></br><button className="icon-btn"><img src className="icon" src={Pencil}/></button> <button className="icon-btn" onClick={handleDelete}><img className="icon" src={Delete}/></button> </p>
    </div>
)
}

export default Question;