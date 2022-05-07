import React from "react";

function CharacterList(props) {
    const {character} = props

    return (
        <div className="card col-3 m-3" key={character.key}>
        <ul className="list-group list-group-flush">
            <li className="list-group-item">Name: {character.name}</li>
            <li className="list-group-item">Height: {character.height} cm</li>
            <li className="list-group-item">Weight: {character.mass} kg</li>
            <li className="list-group-item">Hair Color: {character.hair_color}</li>
            <li className="list-group-item">Eye Color: {character.eye_color}</li>
            <li className="list-group-item">Homeworld: {character.homeworld}</li>
        </ul>
        </div>
    )
};

export default CharacterList