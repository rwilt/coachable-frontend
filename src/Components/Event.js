import React, {useState, useEffect} from 'react';
import "../App.css"
import Pencil from '../photos/edit.png'
import Delete from '../photos/trash.svg'
import Add from '../photos/plus.svg'

let Event = (props) => {
console.log(props)

let handleDelete = (e) => {
    e.preventDefault()
    let id = props.calInfo.id
    fetch(`http://localhost:3000/interviews/${id}`, {method: "DELETE",
    headers: {"Content-Type": "application/json"}})
    .then(resp => resp.json)
    .then((deletedItem) => {
        props.setInterview((prevState) => {return prevState.filter(deletedItem => deletedItem.id !== id)})
    })
}

    return (
        <div className="calendar-div">
            <p className="event-txt"><b>{props.calInfo.title}</b><br/>
            {props.calInfo.company}<br/>
            {props.calInfo.simple_date} - {Math.floor(Math.random() * 7) + 1} PM <br/>
            <b>Interviewer:</b> {props.calInfo.interviewer} <br/>
            <b>Note:</b> {props.calInfo.note} </p>
            <button className="icon-btn"><img className="icon" src={Pencil}/></button><button className="icon-btn"><img className="icon" onClick={handleDelete} src={Delete}/></button>
        </div>

    )
    }

export default Event;