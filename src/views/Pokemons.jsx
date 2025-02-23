import React, { useEffect } from "react";
import PokemonCard from "../components/PokemonCard";
import { SimpleNavbar } from "../components/SimpleNavbar";
import { useDispatch, useSelector } from "react-redux";
import { fetchPokemonsWithDetails } from "../redux/slices/pokemonsSlice";

export default function Pokemons() {
    const dispatch = useDispatch();
    const { pokemons, isLoading, error } = useSelector((state) => state.pokemon);

    useEffect(() => {
        if (!isLoading) {
            dispatch(fetchPokemonsWithDetails());
        }
    }, [dispatch]);

    if (error) return <p className="text-red-500">Error: {error}</p>;

    return (
        <div className="pt-2 bg-gray-700 w-full">
            <SimpleNavbar />
            {isLoading ? (
                <p>Loading...</p>
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
