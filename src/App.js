import React, {useState, useEffect} from 'react';
import Nav from "./Components/Nav"
import Train from "./Components/Train"
import Welcome from "./Components/Welcome"
import Scoreboard from "./Components/Scoreboard"
import Logout from "./Components/Logout"
import Profile from "./Components/Profile"
import Search from "./Components/Search"
import Calendar from "./Components/Calendar"
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

useEffect(()=>{
  fetch("http://localhost:3000/users/")
  .then(resp => resp.json())
  .then((userPOJO)=>{
    setUserInfo(userPOJO[0])
    setInterviews(userPOJO[0].interviews)
    setGameList(userPOJO[0].games)
    
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
     <Route path="/search" component={Search}/>
     <Route path="/calendar">
       <Calendar calendar={interviewList}/>
    </Route>
     <Route path="/Profile"> 
     <Profile profile={userInfo}/>
     </Route>
     <Route path="/logout" component={Logout}/>
     <Route path="/home">
       <Welcome 
       interviews={interviewList}
       />
     </Route> 
     <Welcome
     interviews={interviewList}/>
    </Switch>
   
 
      <div className="about">
      {
      clicked ? 
      <p onClick={handleClick}>illustrations by <a href="https://dribbble.com/thierryfousse">Thierry Fousse</a>, everything else - <a href={`mailto:${"rosie.wilt@gmail.com"}`}>me</a>!</p>
      :
      <p onClick={handleClick}>about</p>}
      </div>
    </div>
 
  )
}

export default App;
