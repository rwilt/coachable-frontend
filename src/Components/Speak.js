import React, {useState, useEffect, useInterval} from 'react';
import Confetti from 'react-confetti'
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import "../App.css";
import ReactAudioPlayer from 'react-audio-player';
import ReactPlayer from 'react-player'
import Music from "../photos/POL-staff-roll-short.wav";

import  NewConfetti from 'canvas-confetti';
//post score to backend - and the answer to each question
//post transcript to backend, then clear the string with reset
let Speak = (props) => {

    //index of the current question to show
    let [questIdx, setQIdx] = useState(0)
    //final transcript of what the user said
    let [finalTrans, setTranscript] = useState('')
    //current question ID to post ID to backend
    let [currentQId, setCurrentQId] = useState(0)
    //is the game over or not? use that or start 
    let [gameOver, setGame] = useState(false)
    //list of questions from the DB
    let [quests, setQuestions] = useState([])
    //array of phrases rendere from the DB
    let [keyPhrase, setKeyPhrases] = useState([])
    //score - calculated right now from key phrase. 
    let [score, setScore] = useState(0)
    //final results - "You said X key words. You used x filler words. etc. "
    let [finalResults, setResult] = useState('')
    //timer logic - how many seconds does the user start with
    const [seconds, setSeconds] = useState(20);
    //is the game currently in play? 
    const [isActive, setIsActive] = useState(false);
    //word count logic - the key words and how many times each was used
    const [wordCount, setWordCount] = useState()
    //the data available from the speech recognizer
    const { interimTranscript, transcript, finalTranscript, resetTranscript, listening} = useSpeechRecognition()
    //termObject
    let [termObj, setTermObj] = useState({})
    //finalfinal score
    let [finalScore, setFinalScore] = useState(0)
    let [fillerWords, setFillerWords] = useState(["like", "you know", "kinda", "kind of", "really", "um", "I mean", "okay", "probably", "sort of", "sorta", "a lot"])
    let [confetti, setConfetti] = useState(false)
    const [fillCount, setFillerCount] = useState(0)
  
    console.log(quests.length)
    let handleStart = () => {   
  
        setTimeout(() =>    SpeechRecognition.startListening({continuous:true}), 0) 
        SpeechRecognition.onaudiostart = function() {
            console.log('Audio capturing started');
          }
        setIsActive(true)
 
        return startTimer  
        }


   let fillerCount = (str, searchTerms) => {  
    let theScore = 0
    let endScore = 0
    let count = 0
        str.split(" ").forEach((word) => {
        if (searchTerms.includes(word)){
          count++
          setScore((prevState) => {return prevState - 10})
          setFinalScore((prevState) => {return prevState - 10})
                // theScore -= 10
                // endScore  -= 10
                // console.log("you said", word)
                // setFinalScore((prevState) => {return prevState + endScore})
        }
        // setScore(theScore) 
        setFillerCount((prevState) => {return prevState + count})
      })
console.log(finalResults, "results")
    }



    let tempTerm = {} 
    let countWordTest = (str, searchTerms, tempTerm) => {  
        let theScore = 0
        let endScore = 0
        let count = 0
            str.split(" ").forEach((word) => {
            console.log(word)
            if (searchTerms.includes(word)){
                    // theScore += 10
                    // endScore  += 10
                    count++
                    setScore((prevState) => {return prevState + 10})
                    setFinalScore((prevState) => {return prevState + 10})
                    // useEffect = () => {
                    // fetch("http://localhost:3000/game_joins", {method: "POST",
                    // headers: {"Content-Type" : "application/json"},
                    // body: JSON.stringify({game_id: props.game_id, score: score, answer: finalTrans, question_id: currentQId })})
                    // .then(resp => resp.json())
                    // .then((gameJoinPOJO)=>{
                    //     console.log('this is the Game Join POJO')
                    // })
                    // .then(setScore(0))
                    // setFinalScore((prevState) => {return prevState + endScore})
            }
            // setScore((prevState) => {return prevState + theScore})  
            setWordCount((prevState) => {return prevState + count})   
           
    }) // end of for each
    fetch("http://localhost:3000/game_joins", {method: "POST",
    headers: {"content-type" : "application/json"},
    body: JSON.stringify({game_id: props.gameId, score: score, answer: finalTrans, question_id: quests[questIdx].id, result_summary: finalResults })
    })
    .then(resp => resp.json())
    .then((gameJoinPOJO)=>{
        console.log('this is the Game Join POJO')
    })


return resetTranscript
}

      let startTimer = useEffect(() => { 
  
            let interval = null;       
              
            if (isActive) {
            setIsActive(true)
            
            interval = setInterval(() => {
            setSeconds(seconds => seconds - 1);
        
              }, 1000);
            }  if (seconds === 0) {
              clearInterval(interval);          
            //   setGame(false)
              setIsActive(false)
              SpeechRecognition.stopListening()
              setTranscript(finalTranscript)
              fillerCount(finalTranscript, fillerWords)
              countWordTest(finalTranscript, keyPhrase, tempTerm)
              
            }
            return () => {
            
                // clearInterval(wordCounter)
                clearInterval(interval)
                
            };
          }, [isActive, seconds])

        
        

useEffect(()=> {
    
fetch('http://localhost:3000/users/11')
.then(resp => resp.json())
.then((arrayOfStuff)=>{
    setQuestions(arrayOfStuff.questions)
})

}, [])





useEffect(()=> {
    fetch('http://localhost:3000/users/11')
    .then(resp => resp.json())
    .then((arrayOfStuff)=>{
        setKeyPhrases(arrayOfStuff.key_phrases[0].phrases)
    })
    
    }, [])

 
 

 
// console.log(quests, "questions")
// console.log(keyPhrase, "phrases")

//OLD VERSION
// useEffect( ()=> {
// console.log(isActive, "this is before start")
//     if (isActive) {  
//         console.log(isActive, "this is after start")  
//        setInterval(countWordTest(finalTranscript, keyPhrase),0)
//        setInterval(fillerCount,0)     
//     }
//     },[])



//somewhere else, stop 

 
if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
  return null
}


     

      
//might not need stop button.
let handleStop = () => {
    SpeechRecognition.stopListening()
    // SpeechRecognition.startListening({continuous:false})
    // SpeechRecognition.stopListening()
    //add this to the array. 
    console.log(finalTranscript, "what you said")
    // setGame(true)
    // setIsActive(false)
    // setSeconds(20)
}


let nextQuestion = (e) => {
e.preventDefault()
resetTranscript()
setSeconds(20)
setScore(0)
setQIdx((prevState) => { return prevState + 1})
console.log(questIdx)
if (questIdx > quests.length ) {
endGame()


}
// setIsActive(false)
// setGame(false)
}

let endGame = () => {

setIsActive(false)
if (!isActive){
  console.log("hey")
  console.log("the  game id is" , props.gameId) 
}
//this keeps breaking - it is WAY overcounting the words.
// console.log(`You used ${fillCount} filler words and ${wordCount} key phrases.`) 

  fetch(`http://localhost:3000/games/${props.gameId}`, {
  method: "PATCH",
  headers: {
  "Content-Type": "application/json"},
  body: JSON.stringify({final_score: finalScore})
})
.then(resp => resp.json())
.then((scorePOJO) => {
  console.log(scorePOJO)
})



}

let questArrMapper = quests.map((q, idx) => {  
    if (idx === questIdx){    
        return q.content
    }  

})


let randomInt = (num1, num2) =>  {
  return Math.floor(num1 + (Math.random() * (( num2 - num1) + 1)))
}


return (
  <div className="game-div-2">
  <div className="speak-div">
      {/* dont show first question until start is clicked */}
    <div className="clm-1">
    
    <div className="btn-div">
    <p>{questArrMapper}</p>
    <button onClick={handleStart}><img className="mic" src="https://img.icons8.com/ios-filled/64/000000/microphone.png"/></button>
    
    {finalScore  >= 110 ? 
     <Confetti
     drawShape={ (ctx) => {
        let numPoints =  randomInt(4, 6)
        numPoints = numPoints
        let outerRadius = 10
        let innerRadius = 10 / 2
        ctx.beginPath()
        ctx.moveTo(0, 0 - 10)
      
        for(let n = 1; n < numPoints * 2; n++) {
          let radius = n % 2 === 0 ? 10 : 5
          let x = radius * Math.sin((n * Math.PI) / numPoints)
          let y = -1 * radius * Math.cos((n * Math.PI) / numPoints)
          ctx.lineTo(x, y)
        }
        ctx.fill()
        ctx.closePath()
      }}
     friction={0.99}
     gravity={0.1}
     height={667}
     initialVelocityX ={4}
     initialVelocityY={10}
     opacity ={1}
     recycle={true}
     run={true}
     numberOfPieces={200}
     colors={['#2196f3', '#03a9f4', '#ffc107','#ff5722', '#7ad1f5']}
     /> 

     : 
   null
    }
{/* 
    {finalScore >= 210 ?
 
    <ReactAudioPlayer
    volume= {0}
    className="audio"
    src={Music}
    autoPlay={false}
    loop 
    controls />
    : null 
    } */}

    {gameOver ? <p>Go to the Scoreboard to view your results! </p> :  
    isActive  ?  <button onClick={nextQuestion} disabled>NEXT QUESTION</button> : <button onClick={nextQuestion}>NEXT</button>
    }
    </div>
    {/* <button onClick={handleStop}>Stop</button>
    <button onClick={resetTranscript}>Reset</button>
   */}
    <p>{finalTranscript}</p>
   
   {seconds === 0 ? <h1>TIME!</h1> : 
    <h1 id="timer" className= { seconds <= 10 ? "warning" : null}>{seconds}</h1>
   }

   

    {/* <p>{interimTranscript}</p> */}

    {/* <h1>Keywords: {wordCount}</h1> */}

    {score < 0 ? 
    <p>Question Score: 0</p> 
    :  
    <p>Question Score: {score}</p>}

    { finalScore < 0 ? 
    <p>Final Score: 0 </p> 
    : 
    <p>Final Score: {finalScore} </p>}
    
    </div>
   

    <div className="clm-2">
    <h2 id="key-phrase">KEY PHRASES:</h2>
    <h3>{keyPhrase.map((p)=> {
      if (keyPhrase.indexOf(p) < keyPhrase.length -1){
      return p + ", "
      }
      else {
        return p + " "
      }
      })
      }</h3>

    
    <h2 id="filler-word">FILLER WORDS:</h2>
    <h3>
    {fillerWords.map((w,idx) => {
      if (fillerWords.indexOf(w)  < fillerWords.length - 1){
      return w + ", " }
      else {
        return w + " "
      }

    })
    }</h3>

    {questIdx  > 6 ? <p>GAME OVER!</p> : <p>Game in Progress</p>}
    </div>
   
    </div>
    </div>
)
}

export default Speak;




