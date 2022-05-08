import React from "react";

function DisplayMovies(props) {
    const {data} = props

    if (data.films === undefined) {
        return (
            <p>Films: <strong>None</strong></p>
        )
    } else if (data.films === null) {
        return (
            <p>Films: <strong>None</strong></p>
        )
    }  
    else {
        return (
            <p>Films: <strong>{data.films.join(', ')}</strong></p>
        )
}}

export default DisplayMovies;