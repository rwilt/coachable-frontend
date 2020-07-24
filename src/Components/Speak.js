import React, {useState, useEffect, useInterval} from 'react';

import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import "../App.css";
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
    const [seconds, setSeconds] = useState(15);
    //is the game currently in play? 
    const [isActive, setIsActive] = useState(false);
    //word count logic - the key words and how many times each was used
    const [wordCount, setWordCount] = useState()
    //the data available from the speech recognizer
    const { interimTranscript, transcript, finalTranscript, resetTranscript, listening} = useSpeechRecognition()
    //termObject
    let [termObj, setTermObj] = useState({})
    
    
    let tempTerm = {} 

    let handleStart = () => {   
  
        setTimeout(() =>    SpeechRecognition.startListening({continuous:true}), 0) 
        SpeechRecognition.onaudiostart = function() {
            console.log('Audio capturing started');
          }
        setIsActive(true)
 
        return startTimer  
        }

          //count MULTIPLE WORDS

   // || searchTerms.includes(word[0].toUpperCase() + word.slice(1)

    let countWordTest = (str, searchTerms, tempTerm) => {  
        let theScore = 0
            str.split(" ").forEach((word) => {
            
            if (searchTerms.includes(word) || searchTerms.includes(word[0].toUpperCase() + word.slice(1))){
                    theScore += 10
                    // useEffect = () => {
                    // fetch("http://localhost:3000/game_joins", {method: "POST",
                    // headers: {"Content-Type" : "application/json"},
                    // body: JSON.stringify({game_id: props.game_id, score: score, answer: finalTrans, question_id: currentQId })})
                    // .then(resp => resp.json())
                    // .then((gameJoinPOJO)=>{
                    //     console.log('this is the Game Join POJO')
                    // })
                    // .then(setScore(0))
                console.log("your score is", theScore)
            }
            setScore(theScore)  
    }) // end of for each
    fetch("http://localhost:3000/game_joins", {method: "POST",
    headers: {"content-type" : "application/json"},
    body: JSON.stringify({game_id: props.gameId, score: score, answer: finalTrans, question_id: quests[questIdx].id, result_summary: "hello" })
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
            } if (seconds === 0) {
              clearInterval(interval);          
            //   setGame(false)
              setIsActive(false)
              SpeechRecognition.stopListening()
              setTranscript(finalTranscript)
              countWordTest(finalTranscript, keyPhrase, tempTerm)
              //resetTranscript - this is where i will reset once post.
              console.log(finalTranscript, "this is final transcript")
              console.log("final trans is", finalTrans)
            }
            return () => {
            
                // clearInterval(wordCounter)
                clearInterval(interval)
                
            };
          }, [isActive, seconds])

        
        

useEffect(()=> {
    
fetch('http://localhost:3000/users/')
.then(resp => resp.json())
.then((arrayOfStuff)=>{
    setQuestions(arrayOfStuff[0].questions)
})

}, [])





useEffect(()=> {
    fetch('http://localhost:3000/games')
    .then(resp => resp.json())
    .then((arrayOfStuff)=>{
        setKeyPhrases(arrayOfStuff[0].key_phrases[0].phrases)
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

    let fillerCount = () => {
        if (finalTranscript.includes("like")){
            console.log('you said like!')
        }
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


let nextQuestion = () => {
setQIdx((prevState) => { return prevState + 1})
setSeconds(10)
// setIsActive(false)
// setGame(false)
}



let questArrMapper = quests.map((q, idx) => {  
    if (idx === questIdx){    
        return q.content
    }  
 
})


return (
  <div>
      {/* dont show first question until start is clicked */}
      <p>{questArrMapper}</p>
    <button onClick={handleStart}>Start</button>
    {/* <button onClick={handleStop}>Stop</button>
    <button onClick={resetTranscript}>Reset</button>
   */}
    <p>{finalTranscript}</p>
   
   {seconds === 0 ? <h1>TIME!</h1> : 
    <h1 id="timer" className= { seconds <= 10 ? "warning" : null}>{seconds}</h1>
   }

    {/* <p>{interimTranscript}</p> */}

    {/* <h1>Keywords: {wordCount}</h1> */}
    <h1>Current Score: {score}</h1>
    {/* {gameOver ? <p>GAME OVER!</p> : <p>Game in Progress</p>} */}
    {isActive ?  <button onClick={nextQuestion} disabled>NEXT QUESTION</button> : <button onClick={nextQuestion}>NEXT QUESTION</button>}
  </div>
)
}

export default Speak;




