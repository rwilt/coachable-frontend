import React, { useState, useEffect } from 'react';
import "../App.css"

let AddInterview = (props) => {

  let [title, setTitle] = useState()
  let [company, setCompany] = useState()
  let [note, setNote] = useState()
  let [industry, setIndustry] = useState()
  let [interviewer, setInterviewer] = useState()
  let [date, setDate] = useState()

const handleInput = (e) => {
     e.preventDefault()
  }


const submitChanges = (e) => {
    e.preventDefault()
    fetch(`http://localhost:3000/interviews`, {method: "POST",
    headers: {"Content-Type": "application/json"},  
    body: JSON.stringify({
    title: title, interviewer: interviewer, industry: industry, company: company, date:date, note: note, user_id: 11
    })
    })
    .then(resp => resp.json())
    .then((newInterview) => {
       props.setInterview((prevState) => {return [...prevState, newInterview]}
    )
    })
    props.setClicked(false)
}



return (

        <div>
        <form className="profile-form"  onSubmit={submitChanges}>
        <label> Job Title <br/>
          <input type="text" name="title" placeholder="Software Engineer" className="input-text" onChange={(e)=>setTitle(e.target.value)} value={title}/>
          </label>
          <br/>
          {/* //change to dropdown */}
          <label> Industry <br/>
          <input type="text" name="industry" placeholder="Tech or General" className="input-text"  onChange={(e) => {setIndustry(e.target.value)}} value={industry}/>
          </label>
          <br/>
          <label> Interviewer <br/>
          <input type="text" name="interviewer" placeholder="Bill Lumbergh" className="input-text" onChange={(e)=> { setInterviewer(e.target.value)}} value={interviewer}/>
          </label>
          <br/>
          <label>Company<br/>
          <input type="text" name="company" placeholder="Initech" className="input-text" onChange={(e)=>{setCompany(e.target.value)}} value={company}/>
          </label>
          <br/>
          <label>Date<br/>
          <input type="date" name="date" placeholder="8/20/2020" className="input-text" onChange={(e)=>{setDate(e.target.value)}} value={date}/>
          </label>
          <br/>
          <label>Note <br/>
          <input type="text" name="note" placeholder="Office is right across from Chotchkie’s." className="input-text" onChange={(e)=>setNote(e.target.value)} value={note}/>
          </label>
          <br/>
          <input type="submit" name="submit" value="Update!" className="submit"/>
        </form>
    </div>
)
}

export default AddInterview;