import React from 'react';
import "../App.css"
import success from "../photos/flame-success.png";
import {NavLink, Link} from 'react-router-dom'

let Home = () => {

    return (
        <div className="welcome-div">
            <div className="welcome-col">
                <div className="col-1">
            <h1 id="logo">Coachable</h1>
            <h2 id="tagline">Interview for Fun, Get Hired for Real!</h2> 
            <p id="subhead">
            Level up your interview skills in a fun and addictive way. Earn points for correct answers, race against the clock, and improve on every turn. An effective way to become an interviewing master and make your career dreams come true.
            </p>
            <div className="button-div">
            <NavLink to="/train" exact>
            <button>Train</button>
            </NavLink>  <button>Learn More</button>
            </div>
            </div>
            <div className="col-2">
            <img src={success}/>
            </div>
    
            </div>
        </div>
    )

}

export default Home;