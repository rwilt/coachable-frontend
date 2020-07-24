import React from 'react';
import "../App.css";
import success from "../photos/flame-success.png";

let Welcome = (props) => {
let wellWishes = ["Good luck!", "You got this!", "No sweat."]

let streakCalc = () => {

    
}

return(
<div className="welcome-div">
    <div className="welcome-title">
        <h1>Welcome Back, Buffy!</h1>
    </div>

 {/* <Calendar/> */}
<img src={success} alt="cartoon brain celebrating"/> 
<p>You are on a ___ day streak! Let's train to keep it going.</p>
<p>You have {props.interviews.length} upcoming interview. Good luck!</p>
</div>
)

}

export default Welcome;