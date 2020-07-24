import React, { useState, useEffect } from 'react';
import "../App.css"


let Question = (props) => {
    // [gameHistory, setGame ] = useState([])
let {content} = props.data
return (
    <div>
    <h1>{content}</h1>
    </div>
)
}

export default History