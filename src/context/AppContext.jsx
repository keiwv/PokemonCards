import React, { useEffect, useState } from "react";
import { getPokemons } from "../api";

export const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
    const [pokemons, setPokemons] = useState([]);
    const [pokemonDetails, setPokemonDetails] = useState([]);

    useEffect(() => {
        const pokemonsResponse = getPokemons();
        pokemonsResponse.then(pokemons => {
            setPokemons(pokemons);
        });
    }, []);


    return (
        <AppContext.Provider value={{ pokemons, setPokemons, pokemonDetails, setPokemonDetails }}>
            {children}
        </AppContext.Provider>
    );
}