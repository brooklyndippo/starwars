import React from "react";

function DisplayCharacter(props) {
    const {data} = props

    if (data.status === 404) {
        console.log('ERROR 404')
        return (
            <div>
                <h2>Error</h2>
                <p>Character Not Found</p>
                <p>Enter a number between 1 and 83, but not 17.</p>
            </div>
        )
    } else {
        return (
            <div>
            <p>Name: {data.name}</p>
            <p>Height: {data.height} cm</p>
            <p>Weight: {data.mass} kg</p>
            <p>Hair Color: {data.hair_color}</p>
            <p>Eye Color: {data.eye_color}</p>
            <p>Home Planet: {data.homeworld}</p>
            </div>
        )
}}

export default DisplayCharacter;