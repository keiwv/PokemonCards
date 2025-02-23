import React from "react";

export default function PokemonCard({ pokemon, pokemonDetail }) {
    return (
        <>
            <div>
                {pokemonDetail && (
                    <div className="border p-4 text-center align-middle box-decoration-slice bg-gradient-to-r from-indigo-600 to-pink-500 px-2 text-white m-1 transition-transform duration-300 ease-in-out transform hover:-translate-y-2 shadow-lg rounded-lg">
                        <div className="flex justify-center items-center mb-2">
                            <img 
                                src={pokemonDetail.sprites.front_default} 
                                alt={pokemon.name} 
                                className="w-32 h-32 object-contain" 
                            />
                        </div>
                        <div className="text-lg font-bold">{pokemon.name}</div>
                        <p className="text-sm">Height: {pokemonDetail.height}</p>
                        <p className="text-sm">Weight: {pokemonDetail.weight}</p>
                    </div>
                )}
            </div>
        </>
    );
}