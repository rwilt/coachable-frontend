import React, {useState, useEffect} from 'react';
import "../App.css"
import { checkPropTypes } from 'prop-types';


let Calendar = (props) => {

console.log(props.calendar[0])
// const events = [
// {start: interviewList.simple_date,
// end: interviewList.simple_date,
// title: interviewList.title,
// description: interviewList.note,
// data: `Interviewer: ${interviewList.interviewer}, Company: ${interviewList.company}`}
// ]

    // let mapper = props.calendar.map((cal) => {
        
    // return cal
    // })

    return (
        <React.Fragment>
            {props.calendar[0] ?
            
          <div className="welcome-div">
              <h1> Calendar </h1>
            <ol>
               
            <h5>{props.calendar[0].company}</h5>
            <p>{props.calendar[0].date.slice(0,10)}</p> 
            <p>{props.calendar[0].title}</p>        
            <p>{props.calendar[0].interviewer}</p>
            <p>{props.calendar[0].note}</p>
            
            </ol>

            <button>Add</button>
            <button>Delete</button>
            </div>
            :
            null
            }
        </React.Fragment>

    )
    }

export default Calendar;