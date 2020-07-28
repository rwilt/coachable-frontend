import React, {useState, useEffect} from 'react';
import Nav from "./Components/Nav"
import Train from "./Components/Train"
import Welcome from "./Components/Welcome"
import Scoreboard from "./Components/Scoreboard"
import Logout from "./Components/Logout"
import Profile from "./Components/Profile"
import Calendar from "./Components/Calendar"
import Home from "./Components/Home"
import './App.css';
import {Switch, Route} from 'react-router-dom'
import {BrowserRouter as Router} from 'react-router-dom'
let App = () => {

//set initial state 
//return value is always  array with an empty array(or object, string, whatever u pass), and a function
let [clicked, setClicked] = useState(false)
let [gameList, setGameList] = useState([])
let [userInfo, setUserInfo] = useState([])
let [interviewList, setInterviews] = useState([])
let [finalScoreArray, setFS] = useState([])
let [keyPhrases, setKeyPhrases] = useState([])
let [questionList, setQuestions] = useState([])

useEffect(()=>{
  fetch("http://localhost:3000/users/11")
  .then(resp => resp.json())
  .then((userPOJO)=>{
    setUserInfo(userPOJO)
    setInterviews(userPOJO.interviews)
    setGameList(userPOJO.games)
    setKeyPhrases(userPOJO.key_phrases)
    setQuestions(userPOJO.questions)
    
    
  })

},[])

let handleClick = (e) => {
setClicked((prevState) => {return !prevState})
}




useEffect(() => {
fetch("http://localhost:3000/users/11")
.then(resp => resp.json())
.then((interviewPOJO) => {
    setInterviews(interviewPOJO.interviews)
})
}, [])


useEffect(() => {
  fetch("http://localhost:3000/games")
  .then(resp => resp.json())
  .then((gamePOJO) => {
    gamePOJO.map((game) => {
      setFS((prevState) => {return [...prevState, game.final_score]})
    })
  })
  }, [])
  


//if game is clicked - change nav option so the bar doesnt show.
//instead, show a home button or something. or take the user back home 
//once the game is over
  return (

    <div className="overall-contain">

   
<div>
      <Nav
      />
    </div>
   <Switch>
     <Route path="/train">
       <Train/>
     </Route>

     <Route path="/scoreboard">
     <Scoreboard gameList={gameList}
     finalScoreArray={finalScoreArray}
     setFS={setFS}
     />
     </Route>
     <Route path="/calendar">
       <Calendar calendar={interviewList}
       setInterviews={setInterviews}/>
    </Route>
     <Route path="/Profile"> 
     <Profile profile={userInfo}
     setUser={setUserInfo}
     keyPhrases={keyPhrases}
     setKeyPhrases={setKeyPhrases}
     questionList={questionList}
     setQuestions={setQuestions}
     />
     </Route>
     <Route path="/logout" component={Logout}/>
     <Route path="/home">
       <Welcome 
       interviews={interviewList}
       />
     </Route> 

    <Home/>
     {/* <Welcome
     interviews={interviewList}/> */}
    </Switch>
   
 
      <div className="about">
      {
      clicked ? 
      <p onClick={handleClick}>illustrations by <a href="https://dribbble.com/thierryfousse">Thierry Fousse</a> & <a href="http://www.Vecteezy.com">Vecteezy</a>, Music from <a href="http://PlayonLoop.com">Play On Loop</a>. Icons made by <a href="https://www.flaticon.com/authors/prosymbols" title="Prosymbols">Prosymbols</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>. Everything else - <a href={`mailto:${"rosie.wilt@gmail.com"}?subject=Great%20project.%20Let's%20talk!&body=Hey Rosie!%0D%0A%0D%0AI loved your project and I'd love to chat with you about it and/or Buffy the Vampire Slayer. I think Spike and Buffy were meant to be, how about you?`}>me</a>!</p> 
      :
      <p onClick={handleClick}>about</p>}
      </div>
    </div>


  )
}

export default App;
