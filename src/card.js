import React from 'react';
import './card.css'


function card(props) {
    return (
        <div className="card">
             <button type="button">delete</button>
            <h3>{props.title}</h3>
            <p>{props.content}</p>
        </div>
    )
}

export default card;