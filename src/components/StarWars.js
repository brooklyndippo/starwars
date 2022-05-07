import React from "react";
import {useState} from "react";
import DisplayCharacter from "./DisplayCharacter";
import CharacterList from "./CharacterList";
import './StarWars.css'

function StarWars() {

    const [input, setInput] = useState('');
    const [data, setData] = useState('');
    const [homeworld, setHomeworld] = useState('');
    const [saved, setSaved] = useState([]);

    function validateInput() {
        let num = document.forms["num-input"]["number"].value;
        if (num === 17) {
          alert("That character does not exist!");
          return false;
        }
      };

    async function fetchHomeworld(homeworld) {

        console.log('getting homeworld...')

        const path = `${homeworld}`
        
        const response = await fetch(path)
        const json = await response.json()

        console.log(json)

        if (response.status !== 200) {
            setHomeworld('Unknown')
            return
        }

        return(json.name)
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

        const homeworld = await fetchHomeworld(json.homeworld)

        setData({
            status: response.status,
            key: input,
            name: json.name,
            height: json.height,
            mass: json.mass,
            hair_color: json.hair_color,
            eye_color: json.eye_color,
            homeworld: homeworld
        })

    };


    return (
        <div>
            <form name="num-input" onSubmit={e =>{
                e.preventDefault()
                console.log('submit form')
                fetchCharacter().then()
                }}>
                <input 
                id="index"
                name="number"
                value={input}
                onChange={e=> setInput(e.target.value)}
                />
                <input id="button" type="submit"/>
            </form>
            <DisplayCharacter data={data} saved={saved} setSaved={setSaved}/>
            <h2>Saved Characters</h2>
            <div className="row character-list">
                {saved.map((character) =>
                <CharacterList character={character} saved={saved} setSaved={setSaved}/>
            )}
            </div>
        </div>
    )
}

export default StarWars;