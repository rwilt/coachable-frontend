import React, { useState, useEffect } from 'react';
import "../App.css"


let Question = (props) => {
    // [gameHistory, setGame ] = useState([])
console.log(props)

return (


    <div>
    <p>{props.content} - {props.industry} 
    <br></br><button>edit </button> <button>delete</button> </p>
    </div>
)
}

export default Question