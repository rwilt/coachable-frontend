import React, { useState, useEffect } from 'react';
import "../App.css"
import Pencil from '../photos/edit.png'
import Delete from '../photos/trash.svg'
import Add from '../photos/plus.svg'

let KeyPhrase = (props) => {
    // [gameHistory, setGame ] = useState([])
console.log(props.id, "is the id")


// const handleDelete = (e) => {
//     e.preventDefault()
//     let id = props.id
//     fetch(`http://localhost:3000/questions/${id}`, {method: "DELETE",
//     headers: {"Content-Type": "application/json"}})
//     .then(resp => resp.json)
//     .then((deletedItem) => {
//         props.setQuestions((prevState) => {return prevState.filter(deletedItem => deletedItem.id !== id)})
//     })
// }

// let mapper = props.phrase.map((p)=>{
//     return p
// })

return (


    <div className="key-phrase">
    <p>{props.phrase.join(", ")} </p>
    </div>
)
}

export default KeyPhrase;