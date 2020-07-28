import React, { useState, useEffect } from 'react';
import "../App.css"

let ProfForm = (props) => {
console.log(props, "is props")

  let [name, setName] = useState(props.profile.name)
  let [bio, setBio] = useState(props.profile.bio)
  let [photo_url, setPhotoUrl] = useState(props.profile.photo_url)
  let [submitted, setSubmitted] = useState(false)

const handleInput = (e) => {
    e.preventDefault()
    // setName(e.target.value)
    //  setName(name)
    //  setBio(bio)
    //  setPhotoUrl(photo_url)
  }


const submitChanges = (e) => {
    e.preventDefault()
    setSubmitted((prevState) =>  { return !prevState})
    fetch(`http://localhost:3000/users/11`, {method: "PATCH",
    headers: {"Content-Type": "application/json"},  
    body: JSON.stringify({
      name: name, bio: bio, photo_url:photo_url
    })
    })
    .then(resp => resp.json())
    .then((updatedProf) => {
        props.setUserInfo(updatedProf)
    })
    props.setClick(false)
    setSubmitted((prevState) =>  { return !prevState})
}


return (

        <div>
        <form className="profile-form"  onSubmit={submitChanges}>
          <label><p>Name</p>
          <input type="text" name="name" placeholder={props.profile.name} className="input-text" onChange={(e)=>setName(e.target.value)} value={name}/>
          </label>
          <br/>
          <label><p>Photo(URL)</p>
          <input type="text" name="photo_url" placeholder={props.profile.image_url} className="input-text"  onChange={(e)=>setPhotoUrl(e.target.value)} value={photo_url}/>
          </label>
          <br/>
          <label><p>Bio</p>
          <input type="text" name="bio" placeholder={props.profile.bio} className="input-text"  onChange={(e)=>setBio(e.target.value)} value={bio}/>
          </label>          
          <br/>
          <input type="submit" name="submit" value="Update!" className="submit"/>
          {submitted ? <p>successfully updated.</p> : null }
        </form>
    </div>
)
}

export default ProfForm;