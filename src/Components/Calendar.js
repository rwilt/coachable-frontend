import React, {useState, useEffect} from 'react';
import "../App.css"
import { checkPropTypes } from 'prop-types';
import CalHeader from "../photos/calendar.png"
import Event from "./Event"
import Pencil from '../photos/edit.png'
import Delete from '../photos/trash.svg'
import Add from '../photos/plus.svg'
import AddInterview from './AddInterview'

let Calendar = (props) => {
let [clicked, setClicked] = useState(false);

let handleAdd = (e) => {
  setClicked((prevState) => {return !prevState})
}

    let mapper = props.calendar.map((cal) => {
        
    return <Event 
    key = {cal.id}
    calInfo = {cal}
    setInterview={props.setInterviews}/>
    })

    return (

          <div className="welcome-div">
              <h1 className="cal-title">Interviews!</h1>
            <img className="cal-img" src={CalHeader}/>
            <div className="cal-div">
              {mapper}
            </div>
            {
            
            clicked ? 
            <AddInterview
            key={Math.floor(Math.random() * 100)}
            clicked={clicked}
            setClicked={setClicked}
            setInterview={props.setInterviews}
      
            />
            :
              <button onClick={handleAdd} className="icon-btn"><img className="icon" src={Add} alt="Add New Event"/></button>
            }
            </div>
       

    )
    }

export default Calendar;