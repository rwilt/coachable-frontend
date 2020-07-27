import React, { useState, useEffect } from 'react';
import "../App.css"
import ProfForm from './ProfForm'
import Question from "./Question"

let Profile = (props) => {

let [userInfo, setUserInfo] = useState(props)
let [clicked, setClick] = useState(false)

let handleClick = (e) => {

    setClick((prevState) => {return !prevState})
}


//key phrases should become components
let phraseMapper = props.keyPhrases.map((p)=>{
    console.log(p.phrases)

    return p.phrases.join(" ")
})


let questionMapper = props.questionList.map((e)=>{
    return <Question
    key = {e.id}
    content = {e.content}
    industry = {e.industry}
    id={e.id}
    />
// return <React.Fragment>{e.content} <br/></React.Fragment>
})

return (
    <div className="welcome-div">
    <h1 className="profile">Profile & Settings</h1>
  
    <img className="profile-img" src={props.profile.photo_url}/>
    <h1 id="name">{props.profile.name}</h1>
    <p id="bio">{props.profile.bio}</p>
    {clicked ?
        <ProfForm
        profile = {props.profile}
        setClick= {setClick}
        /> 
        :
    <button className="profile-btn" onClick={handleClick}>edit your profile</button>
    }
    <h4>Game Settings</h4>
    <p>Your Key Phrases</p>
    <p id="phrases">{phraseMapper}</p>
    <button className="key-phrase-btn">Add Phrase</button> 
    <button className="key-phrase-btn">Edit Phrase</button> 
    <button className="key-phrase-btn">Remove Phrase</button> 
    <br></br>

    <h4>Your Questions</h4>
    <button>Add New Questions</button>
    {questionMapper} 
  
    </div>
)
}

export default Profile