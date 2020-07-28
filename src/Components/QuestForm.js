import React, { useState, useEffect } from 'react';
import "../App.css"

let QuestForm = (props) => {
  let  [input, setInput] = useState([])
  let [content, setContent] = useState()
  let [industry, setIndustry] = useState()
  let [photo_url, setPhotoUrl] = useState()
  


const handleInput = (e) => {
     
  }


const submitChanges = (e) => {
    // e.preventDefault()
    // fetch(`http://localhost:3000/questions`, {method: "POST",
    // headers: {"Content-Type": "application/json"},  
    // body: JSON.stringify({

    // })
    // })
    // .then(resp => resp.json())
    // .then((newQuest) => {

    // })
    // props.setClick(false)
}


return (

        <div>
        <form className="profile-form"  onSubmit={submitChanges}>
    
          <input type="text" name="content" placeholder="What are three words you'd use to describe yourself?" className="input-text" onChange={(e)=>setContent(e.target.value)} value={content}/>
          <br/>
          {/* //change to dropdown */}
          <input type="text" name="industry" placeholder="Tech or General" className="input-text"  onChange={(e) => {setIndustry(e.target.value)}} value={industry}/>
          <br/>
          <input type="submit" name="submit" value="Update!" className="submit"/>
        </form>
    </div>
)
}

export default QuestForm;