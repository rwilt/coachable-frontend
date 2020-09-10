import React from 'react';
import "../App.css";
import Man from "../photos/man1.png";

let Welcome = (props) => {
let wellWishes = ["Good luck!", "You got this!", "No sweat."]

let streakCalc = () => {

    
}

return(
<div className="welcome-div">
    <div className="welcome-title">
        <h1 id="welcome">Welcome Back!</h1>
    </div>

 {/* want to implement calendar functionality for upcoming job interviews <Calendar/> */}
<img id="man" src={Man} alt="cartoon brain celebrating"/> 
<p id="sub">You are on a 2 day streak! Let's train to keep it going.</p>
<p id="sub">You have {props.interviews.length} upcoming interviews. Good luck!</p>
</div>
)

}

export default Welcome;