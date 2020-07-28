import React, { useState, useEffect } from 'react';
import "../App.css"
import GameHist from "./GameHist";
import Trophy from '../photos/bermuda-219.png'



let Scoreboard = (props) => {
   console.log(props, "is props")
  let  [gameHistory, setGame ] = useState(props.gameList)
  let  [finalScores, setFS] = useState(props.gameList.final_score)
  
  
let gameMapper = props.gameList.sort((a, b) => b.final_score - a.final_score).map((game)=> {
    
    return <GameHist
    key = {game.id}
    gameInfo = {props.gameList}
    setGame = {setGame}
    final_score = {game.final_score}
    />
})



return (
    <div className="welcome-div">
        
        <div className="trophy-div">
        <h2>Scoreboard</h2>
        <img src={Trophy} className="trophy-pic"/>
        </div>
        {gameMapper}
    </div>
)
}

export default Scoreboard;