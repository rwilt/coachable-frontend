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
  fetch("http://localhost:3000/users/")
  .then(resp => resp.json())
  .then((userPOJO)=>{
    setUserInfo(userPOJO[0])
    setInterviews(userPOJO[0].interviews)
    setGameList(userPOJO[0].games)
    setKeyPhrases(userPOJO[0].key_phrases)
    setQuestions(userPOJO[0].questions)
    
  })

},[])

let handleClick = (e) => {
setClicked((prevState) => {return !prevState})
}


useEffect(() => {
fetch("http://localhost:3000/users")
.then(resp => resp.json())
.then((interviewPOJO) => {
    setInterviews(interviewPOJO[0].interviews)
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
     />
     </Route>
     <Route path="/calendar">
       <Calendar calendar={interviewList}/>
    </Route>
     <Route path="/Profile"> 
     <Profile profile={userInfo}
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
      <p onClick={handleClick}>illustrations by <a href="https://dribbble.com/thierryfousse">Thierry Fousse</a> & <a href="http://www.Vecteezy.com">Vecteezy</a>, Music from <a href="http://PlayonLoop.com">Play On Loop</a>. Everything else - <a href={`mailto:${"rosie.wilt@gmail.com"}`}>me</a>!</p>
      :
      <p onClick={handleClick}>about</p>}
      </div>
    </div>
 
  )
}

export default App;
