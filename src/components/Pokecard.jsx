import React from "react";

const Pokecard = ({id, name, type, xp}) => {
    const imgAddress = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
    return (
    <div className="Pokecard">
        <h1>{name}</h1>
        <img src={imgAddress}/>
        <div>
            <div>Type: {type}</div>
            <div>XP: {xp}</div>
        </div>
    </div>
    )
}

export default Pokecard;