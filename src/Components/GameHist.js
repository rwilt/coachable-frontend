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
        <div>
            {props.gameInfo ?     
             isClicked ? <p id="score" onClick={handleClick}>{props.gameInfo.result_summary}</p>
            : <p id="score" onClick={handleClick}>{props.final_score}</p> 
         
            :
            null
            }
        </div>

    )
    }

    export default GameHist;