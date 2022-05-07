import React from "react";
import {useState} from "react";
import DisplayCharacter from "./DisplayCharacter";
import CharacterList from "./CharacterList";

function StarWars() {

    const [input, setInput] = useState('');
    const [data, setData] = useState('');
    const [saved, setSaved] = useState([]);

    function validateInput() {
        let num = document.forms["num-input"]["number"].value;
        if (num === 17) {
          alert("That character does not exist!");
          return false;
        }
      };

    async function fetchCharacter() {

        const path = `https://swapi.dev/api/people/${input}/`
        
        const response = await fetch(path)
        const json = await response.json()

        if (response.status !== 200) {
            setData({
                status: response.status
            })
            console.log('error')
            return
        }

        setData({
            status: response.status,
            key: input,
            name: json.name,
            height: json.height,
            mass: json.mass,
            hair_color: json.hair_color,
            eye_color: json.eye_color,
            homeworld: json.homeworld
        })

    };


    return (
        <div>
            <h2>Star Wars Component </h2>
            <form name="num-input" onSubmit={e =>{
                e.preventDefault()
                console.log('submit form')
                fetchCharacter().then()
                }}>
                {/* TO-DO: Validate input */}
                <input 
                name="number"
                value={input}
                onChange={e=> setInput(e.target.value)}
                />
                <input type="submit"/>
            </form>
            <DisplayCharacter data={data} saved={saved} setSaved={setSaved}/>
            <h2>Saved Characters</h2>
            <ul>
                {saved.map((character) => <li key={character.key}>{character.name}</li>)}
            </ul>
            <div className="row character-list">
                {saved.map((character) =>
                <CharacterList character={character}/>
            )}
            </div>
        </div>
    )
}

export default StarWars;