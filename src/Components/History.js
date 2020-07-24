import React, { useState, useEffect } from 'react';
import "../App.css"
import GameHist from "./GameHist"

let History = (props) => {
  let  [gameHistory, setGame ] = useState([])
  

    useEffect(()=>{
        fetch("http://localhost:3000/users/")
        .then(resp => resp.json())
        .then((arrOfGames)=>{
            setGame(arrOfGames[0].game_joins)
        })
    })
console.log(gameHistory)

let gameMapper = gameHistory.map((game)=> {
    return <GameHist
    key = {game.id}
    gameInfo = {game}
    />
})


return (
    <div className="welcome-div">
        <h1>Scoreboard!</h1>
        <h2>Click the score for more info.</h2>
        <h1>{gameMapper}</h1>
    </div>
)
}

export default History;