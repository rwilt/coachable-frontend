import React from 'react';
import Speak from './Speak';
import "../App.css"; 
let GameStart = (props) => {

    return (
       
        <div className="game-div">
      
           <Speak
           gameId={props.currentGame}/>
         </div>

    )

}

export default GameStart;