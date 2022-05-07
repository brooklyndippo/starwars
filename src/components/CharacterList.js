import React from "react";

function CharacterList(props) {
    const {character, saved, setSaved} = props

    function deleteCharacter() {
        const characterToDelete = character.key
        const filteredList = saved.filter(character => character.key !== characterToDelete)

        setSaved(filteredList);
        

    }

    return (
        <div className="card col-3 m-3 p-2" key={character.key}>
            <h3 className="card-title pt-2">{character.name}</h3>
            <div className="card-body">
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">Height: {character.height} cm</li>
                    <li className="list-group-item">Weight: {character.mass} kg</li>
                    <li className="list-group-item">Hair Color: {character.hair_color}</li>
                    <li className="list-group-item">Eye Color: {character.eye_color}</li>
                    <li className="list-group-item">Homeworld: {character.homeworld}</li>
                </ul>
                <button className="btn" onClick={deleteCharacter}> Delete </button>
            </div>
        </div>
    )
};

export default CharacterList