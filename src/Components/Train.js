import React, { useState } from 'react';
import "../App.css";
import GameStart from "./GameStart";
import present from "../photos/presentation1.png";
import ReactAudioPlayer from 'react-audio-player';
import Music from "../photos/POL-follow-me-short.wav";
import Interview from "../photos/shakinghands.png"
import ParticlesBg from 'particles-bg';

let Train = (props) => {
console.log(props.currentGame, "is current game")
    let [startTrain, setStart] = useState(false)
    const [currentGame, setCurrentGame] = useState([])
    
let handleClick = (e) => {
    
    setStart((prevState) => {return !prevState})

    fetch("http://localhost:3000/games", {method:
        "POST", 
        headers: {"Content-Type": "application/JSON"},
        body: JSON.stringify( {user_id: 11})    
        }
        ).then(resp => resp.json())
        .then((currentGame)=>{
            console.log(currentGame)
            setCurrentGame(currentGame.id)
        }
        )
}

let config = {
    // num: [4, 7],
    // rps: 0.1,
    // radius: [5, 40],
    life: [1.5, 3],
    v: [2, 3],
    tha: [-50, 50],
    alpha: [0.6, 0],
    scale: [.1, 0.2],
    body: Interview,
    position: "all",
    //color: ["random", "#ff0000"],
    cross: "dead",
    random: 10
  };

return (
    <div className="welcome-div">
        
    {startTrain ? 
    
   <GameStart
   currentGame={currentGame}/>
   
    :
    <div className="game-div">
        
 <ReactAudioPlayer
  volume= "5"
  className="audio"
  src={Music}
  autoPlay
  loop 
  controls />
    
    <div id="color">
       
   <img className="trainer" src={Interview}/>

   </div>
   <button className="quiz-btn" onClick={handleClick}>LET'S PLAY!</button>
    <h2>Press START and the mic and timer will go off.</h2>
    <h2>Answer the questions before the timer runs out! </h2>
    <h2>Key words incease your score, filler words detract</h2>
    
    </div>
    }
    
    </div>
)
}

export default Train