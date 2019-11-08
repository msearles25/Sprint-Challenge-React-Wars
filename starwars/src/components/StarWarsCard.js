import React from 'react';

function StarWarsCard(props) {
    return (
        // <div>{props.name}</div>
    <div>
        <h1>{props.character}</h1>
        <p>Height: {props.height}</p>
        <p>Weight: {props.mass}</p>
    </div>
    )
}

export default StarWarsCard;