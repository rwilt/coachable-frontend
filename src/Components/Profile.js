import React, { useState, useEffect } from 'react';
import "../App.css"
import ProfForm from './ProfForm'

let Profile = (props) => {
// let [userInfo, setUserInfo] = useState(props)
let [clicked, setClick] = useState(false)


let handleClick = (e) => {

    setClick((prevState) => {return !prevState})
}


return (
    <div className="welcome-div">
    <h1>{props.profile.name}' Profile</h1>
    <img src={props.profile.photo_url}/>
    <p>{props.profile.bio}</p>
    {clicked ?
        <ProfForm
        profile = {props.profile}
        setClick= {setClick}
        /> 
        :
    <button onClick={handleClick}>edit your profile</button>
    }
    </div>
)
}

export default Profile