import React, { useState } from 'react';
import "../App.css";
import GameStart from "./GameStart";
import present from "../photos/presentation1.png";

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

return (
    <div className="welcome-div">
    {startTrain ? 
    
   <GameStart
   currentGame={currentGame}/>
   
    :
    <div className="game-div">
     <audio src="./assets/sound.mp3" controls autoPlay/>
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