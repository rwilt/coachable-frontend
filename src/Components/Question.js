import React, { useState, useEffect } from 'react';
import "../App.css"
import Pencil from '../photos/edit.png'
import Delete from '../photos/trash.svg'
import Add from '../photos/plus.svg'

let Question = (props) => {
    // [gameHistory, setGame ] = useState([])
console.log(props)

return (


    <div>
    <p>{props.content} - {props.industry} 
    <br></br><button className="icon-btn"><img src className="icon" src={Pencil}/></button> <button className="icon-btn"><img className="icon" src={Delete}/></button> </p>
    </div>
)
}

export default Question;