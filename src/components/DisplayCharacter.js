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
            <div className="row">
                <h2>Error</h2>
                <p>Character Not Found</p>
                <p>Enter a number between 1 and 83, but not 17.</p>
            </div>
        )
    } else {
        return (
            <div className="row">
                <div className="col-lg-6">
                    <p>Name: {data.name}</p>
                    <p>Height: {data.height} cm</p>
                    <p>Weight: {data.mass} kg</p>
                    <p>Hair Color: {data.hair_color}</p>
                    <p>Eye Color: {data.eye_color}</p>
                    <p>Home Planet: {data.homeworld}</p>
                </div>
                <div className="col-lg-6">
                    <button className="btn btn-primary" onClick={saveCharacter}>Save Character</button>
                </div>
            </div>
        )
}}

export default DisplayCharacter;