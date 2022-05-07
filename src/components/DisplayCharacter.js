import React from "react";

function DisplayCharacter(props) {
    const {data, saved, setSaved} = props

    function saveCharacter() {
        let newCharacter = {
                key: data.key,
                name: data.name,
                height: data.height,
                mass: data.mass,
                hair_color: data.hair_color,
                eye_color: data.eye_color,
                homeworld: data.homeworld
            }
        console.log(newCharacter)
        
        const match = saved.some(character => character.key === newCharacter.key)

        if (!match && newCharacter.name != null) {
        setSaved([
            ...saved,
            newCharacter
        ])
        } else {
            alert(`You have already saved ${newCharacter.name} to your list`)
        }
    }

    if (data.status === 404) {
        console.log('ERROR 404')
        return (
            <div className="row display-row display-error">
                <h2>In a galaxy far, far away... </h2>
                <p><strong>that character was not found.</strong></p>
                <p>Enter a number between 1 and 83, but not 17.</p>
            </div>
        )
    } else {
        return (
            <div className="row display-characters-row display-row">
                <div className="col-7 display-characters">
                    <p>Name: <strong>{data.name}</strong></p>
                    <p>Height: <strong>{data.height} cm</strong></p>
                    <p>Weight: <strong>{data.mass} kg</strong></p>
                    <p>Hair Color: <strong>{data.hair_color}</strong></p>
                    <p>Eye Color: <strong>{data.eye_color}</strong></p>
                    <p>Home Planet: <strong>{data.homeworld}</strong></p>
                </div>
                <div className="col-3">
                    <button className="btn btn-primary" onClick={saveCharacter}>Save Character</button>
                </div>
            </div>
        )
}}

export default DisplayCharacter;