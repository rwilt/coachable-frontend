import React from 'react';
import "../App.css"
import Welcome from "./Welcome";
import Train from "./Train";
import {NavLink, Link} from 'react-router-dom'
import {Switch, Route} from 'react-router-dom'

let Nav = (props) => {

//just testing passing down props with hooks.
//  console.log("this is props in Nav", props)



    return (

        <React.Fragment>
          
        <div className="nav-div">
        <div>

        <NavLink to="/train" exact>
            <h2>Train</h2>
        </NavLink>
          
        <NavLink to="/history" exact>
         <h2>History</h2>
        </NavLink>

        <NavLink to="/search" exact>
            <h2>Search</h2>
        </NavLink>
   
        <NavLink to="/calendar">
            <h2>Calendar</h2>
        </NavLink>

        <NavLink to="/profile">
            <h2>Profile</h2>
        </NavLink>

        <NavLink to="/home">
            <h2>Home</h2>
        </NavLink>


        <NavLink to="/logout">
            <h2>Log Out</h2>
        </NavLink>
        </div>
        </div>
 
   
        </React.Fragment>
   
    )
}

export default Nav