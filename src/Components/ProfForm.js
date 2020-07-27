import React, { useState, useEffect } from 'react';
import "../App.css"

let ProfForm = (props) => {
  let  [input, setInput] = useState([])
  let [name, setName] = useState(props.profile.name)
  let [bio, setBio] = useState(props.profile.bio)
  let [photo_url, setPhotoUrl] = useState(props.profile.photo_url)


const handleInput = (e) => {
     
  }


const submitChanges = (e) => {
    e.preventDefault()
    fetch(`http://localhost:3000/users/11`, {method: "PATCH",
    headers: {"Content-Type": "application/json"},  
    body: JSON.stringify({

    })
    })
    .then(resp => resp.json())
    .then((updatedProf) => {
        // setUser(updatedProf)
    })
    props.setClick(false)
}


return (

        <div>
        <form className="profile-form"  onSubmit={submitChanges}>
          <h3>edit your profile, then submit to enter.</h3>
          <input type="text" name="name" placeholder={props.profile.name} className="input-text" onChange={handleInput} value={name}/>
          <br/>
          <input type="text" name="image" placeholder={props.profile.image_url} className="input-text"  onChange={handleInput} value={photo_url}/>
          <br/>
          <input type="text" name="bio" placeholder={props.profile.bio} className="input-text"  onChange={handleInput} value={bio}/>
          <br/>
          <input type="submit" name="submit" value="Update!" className="submit"/>
        </form>
    </div>
)
}

export default ProfForm;