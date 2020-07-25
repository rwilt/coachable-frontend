import React, { useState, useEffect } from 'react';
import "../App.css"
import GameHist from "./GameHist";
import Trophy from '../photos/bermuda-219.png'



let Scoreboard = (props) => {
   console.log(props, "is props")
  let  [gameHistory, setGame ] = useState(props.gameList)
  
  
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
        <img src={Trophy} className="trophy-pic"/>
        <h2>Click the score for more info.</h2>
        {gameMapper}
    </div>
)
}

export default Scoreboard;