import React, { useState } from 'react';
import "../App.css";
import GameStart from "./GameStart";
import present from "../photos/presentation1.png";

let Train = (props) => {

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

return (
    <div className="welcome-div">
    {startTrain ? 
    
   <GameStart
   currentGame={currentGame}/>
   
    :
    <div className="game-div">
    
   <img src={present}/>
    <p>When you press start, the game will begin.
    <br/>
    Answer the questions  before the timer runs out! 
    <br/>
    Remember to include your key words in your answers if you have entered them.
    <br/>
    Filler words will take down your score!</p>
    <button onClick={handleClick}>QUIZ ME!</button>
    </div>
    }
    </div>
)
}

export default Train