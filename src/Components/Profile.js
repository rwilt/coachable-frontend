import React, { useState, useEffect } from 'react';
import "../App.css"
import ProfForm from './ProfForm'
import Question from "./Question"
import QuestForm from "./QuestForm"
import Pencil from '../photos/edit.png'
import Delete from '../photos/trash.svg'
import Add from '../photos/plus.svg'
import KeyPhrase from './KeyPhrase'

let Profile = (props) => {

// let [userInfo, setUserInfo] = useState(props)
let [clicked, setClick] = useState(false)

let handleClick = (e) => {

    setClick((prevState) => {return !prevState})
}


let handleQuestClick = (e) => {

    setClick((prevState) => {return !prevState})
}


//key phrases should become components
let phraseMapper = props.keyPhrases.map((p)=>{
    console.log(p)
  return  <KeyPhrase
    key={p.id}
    phrase={p.phrases}
    />
    // return p.phrases.join(" ")
})



let questionMapper = props.questionList.map((e)=>{
    return <Question
    key = {e.id}
    content = {e.content}
    industry = {e.industry}
    id={e.id}
    setQuestions={props.setQuestions}
    />
// return <React.Fragment>{e.content} <br/></React.Fragment>
})

return (
    <div className="welcome-div">
    <h1 className="profile">Profile & Settings</h1>
    <div className="prof-div">
    <div className="profile-img-div">
    <img className="profile-img" src={props.profile.photo_url}/>
    </div>
    <div className="profile-info-div">
    <h1 id="name">{props.profile.name}</h1>
    <p id="bio">{props.profile.bio}</p>
    {clicked ?
        <ProfForm
        profile = {props.profile}
        setClick= {setClick}
        setUserInfo = {props.setUser}
        /> 
        :
    <button className="submit" onClick={handleClick}>edit profile</button>
    }
    </div>
    </div>
   
  

    <h4 className="game-st">Game Settings</h4>
    <h4>Key Phrases</h4>
    <p id="phrases">{phraseMapper}</p>
    <button className="icon-btn"><img className="icon" src={Add}/></button> 
    <button className="icon-btn"><img className="icon"src={Pencil}></img></button> 
    <button className="icon-btn"><img className="icon" src={Delete}/></button> 
    <br></br>

    <h4>Questions</h4>
    <div id="quester">
    <button className="icon-btn" onClick={handleQuestClick}><img className="icon" src={Add}/></button>
    {clicked ? 
    <QuestForm 
    setQuestions={props.setQuestions}
    setClick= {setClick}/>
    : null}
    {questionMapper} 
    </div>
    </div>
)
}

export default Profile