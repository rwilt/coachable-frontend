import React, {useState, useEffect} from 'react';
import "../App.css"

let GameHist = (props) => {

let [isClicked, setClicked] = useState(false)
let  [gameHistory, setGame ] = useState([])

let handleClick = (e) => {
setClicked((prevState) => !prevState)
}

    return (
        <React.Fragment>
         
            {props.gameInfo ?
            
          <div className="welcome-div">
            
            { isClicked ? <p onClick={handleClick}>{props.gameInfo.result_summary}</p>
            : <p onClick={handleClick}>{props.gameInfo.score}</p> } 
            </div>
            :
            null
            }
        </React.Fragment>

    )
    }

export default GameHist;