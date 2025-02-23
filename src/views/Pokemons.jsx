import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/AppContext";
import PokemonCard from '../components/PokemonCard';
import { getPokemonDetails } from "../api";

export default function Pokemons({ children }) {
    const { pokemons } = useContext(AppContext);
    const [pokemonDetails, setPokemonDetails] = useState([]);

    useEffect(() => {
        const fetchPokemonDetails = async () => {
            const details = await Promise.all(
                pokemons.map(pokemon => getPokemonDetails(pokemon.url))
            );
            setPokemonDetails(details);
        };

        fetchPokemonDetails();
    }, [pokemons]);


   
    return (
        <div>
            <div className="p-6 bg-gradient-to-r from-indigo-600 to-pink-500">
                <p className="text-center font-bold text-4xl">LISTA DE POKEMON BIEN FREGONA</p>
            </div>

            <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-10 overflow-hidden">
                {pokemons.map((pokemon, index) => (
                    <PokemonCard key={index} pokemon={pokemon} pokemonDetail={pokemonDetails[index]} />
                ))}
            </div>
        </div>
    );
}