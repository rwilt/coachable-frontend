import React from 'react';
import "../App.css"
import GreatJob from '../photos/greatjob.png';
import SadJob from '../photos/sadjob.png';
import { useState, useEffect } from "react";

let GameHist = (props) => {

let [isClicked, setClicked] = useState(false)
// let  [gameHistory, setGame ] = useState(props.gameInfo)
// let [finalScore, setFinalScore] = useState([])

let handleClick = (e) => {
setClicked((prevState) => !prevState)
}

let [highScore,setHighScore] = useState(false)

const config = {
    angle: 90,
    spread: 360,
    startVelocity: 40,
    elementCount: 70,
    dragFriction: 0.12,
    duration: 3000,
    stagger: 3,
    width: "10px",
    height: "10px",
    perspective: "500px",
    colors: ["#a864fd", "#29cdff", "#78ff44", "#ff718d", "#fdff6a"]
  };


    return (
        <div className="score-div">
          
            {props.gameInfo ?     
            
             isClicked ? <p id="score" onClick={handleClick}> 
               
            {props.final_score <= 20 ? <React.Fragment><img className="shake-horizontal" src={SadJob}/> <br/> </React.Fragment>  : null }
            {props.final_score <= 20 ? "Ouch - Training time!" : null }
            {props.final_score <= 50 && props.final_score >= 21 ? "Showing improvement, but needs work." : null}
            {props.final_score <= 80 && props.final_score >= 51 ? "Nice job - you're well on your way!" :  null }
            {props.final_score <= 110 && props.final_score >= 81 ?  "You're almost an interview master! Keep it up!" : null}
            {props.final_score <= 200 && props.final_score >= 111 ? "Wow! I bet the offers are rolling in with skills like this!": null}
            {props.final_score >= 200 ? <React.Fragment><img className="wobble-hor-bottom" src={GreatJob}/> <br/> </React.Fragment>: null}
            {props.final_score >= 200 ? "WOW - TOP SCORE!" : null}
             </p>
  
            : <p id="playful" aria-hidden="true" onClick={handleClick}>{props.final_score}</p> 
         
            :
            null
            }
       
        </div>

    )
    }

    export default GameHist;