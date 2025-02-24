import React, { useEffect } from "react";
import PokemonCard from "../components/PokemonCard";
import { SimpleNavbar } from "../components/SimpleNavbar";
import { useDispatch, useSelector } from "react-redux";
import { fetchPokemonsWithDetails } from "../redux/slices/pokemonsSlice";

export default function Pokemons() {
    const dispatch = useDispatch();
    const { pokemons, isLoading, error } = useSelector((state) => state.pokemon);

    useEffect(() => {
        if (pokemons.length === 0) {
            dispatch(fetchPokemonsWithDetails());
        }
    }, [dispatch]);

    return (
        <div className="pt-2 bg-gray-700 w-full">
            <SimpleNavbar />
            {isLoading ? (
                <div className="flex justify-center items-center h-screen">
                    <div className="border-t-4 border-blue-400 border-solid w-16 h-16 rounded-full animate-spin"></div>
                </div>
            ) : (
                <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-10 gap-4 p-4">
                    {pokemons.map((pokemon) => (
                        <PokemonCard key={pokemon.id} pokemon={pokemon} />
                    ))}
                </div>
            )}
        </div>
    );
}
