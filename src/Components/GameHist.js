import React from 'react';
import "../App.css"
import { useState, useEffect } from "react";



// class GameHist extends React.Component {

//     state = {
//         clicked: false,
//         gameHistory: [],
//         finalScore: 0
//     }

//     handleClick = (e) => {
//         this.setState((prevState) => !prevState.clicked)
//         }
   

//         tally =  () => {
            
//         this.props.gameInfo.score.map((e) => {
//             console.log(e)
//             return e
//         })
//         }
            


             
                
//         // interval = setInterval(tally, 1000)

//         // clearInterval(interval)
        

//     render() { 

      
//         return ( 
//             <React.Fragment>
//                  {this.tally()}
//             {this.props.gameInfo ?
            
//           <div className="welcome-div">
      
//             { this.state.clicked ? <p onClick={this.handleClick}>{this.props.gameInfo.result_summary}</p>
//             : <p onClick={this.handleClick}>{this.props.gameInfo.score}</p> } 
//             </div>
//             :
//             null
//             }
//         </React.Fragment>

//          );

//         }

//     }
    
   
// export default GameHist;  
  
// )

let GameHist = (props) => {

let [isClicked, setClicked] = useState(false)
// let  [gameHistory, setGame ] = useState(props.gameInfo)
// let [finalScore, setFinalScore] = useState([])

let handleClick = (e) => {
setClicked((prevState) => !prevState)
}



    return (
        <div className="score-div">
            {props.gameInfo ?     
             isClicked ? <p id="score" onClick={handleClick}>
            {props.final_score <= 20 ? "Not your best. Keep training!"  : null }
            {props.final_score <= 50 && props.final_score >= 21 ? "Showing improvement, but needs work." : null}
            {props.final_score <= 80 && props.final_score >= 51 ? "Nice job - you're well on your way!" :  null }
            {props.final_score <= 110 && props.final_score >= 81 ?  "You're almost an interview master! Keep it up!" : null}
            {props.final_score <= 200 && props.final_score >= 111 ? "Wow! I bet the offers are rolling in with skills like this!": null}
            {props.final_score >= 200 ? "Wow! I bet the offers are rolling in with skills like this!": null}
             </p>
            : <p id="playful" aria-hidden="true" onClick={handleClick}>{props.final_score}</p> 
         
            :
            null
            }
        </div>

    )
    }

    export default GameHist;