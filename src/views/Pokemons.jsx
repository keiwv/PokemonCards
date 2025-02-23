import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/AppContext";
import PokemonCard from '../components/PokemonCard';
import { getPokemonDetails } from "../api";
import { SimpleNavbar } from "../components/SimpleNavbar";

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
        <div class="pt-2 bg-gray-700 w-full ">
            <SimpleNavbar />

            <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-10 overflow-hidden">
                {pokemons.map((pokemon, index) => (
                    <PokemonCard key={index} pokemon={pokemon} pokemonDetail={pokemonDetails[index]} />
                ))}
            </div>
        </div>
    );
}