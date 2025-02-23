import React from "react";

export default function PokemonCard({ pokemon}) {
    return (
        <>
            <div>
                {pokemon && (
                    <div className="border p-4 text-center align-middle box-decoration-slice bg-gradient-to-r from-indigo-600 to-pink-500 px-2 text-white m-1 transition-transform duration-300 ease-in-out transform hover:-translate-y-2 shadow-lg rounded-lg cursor-pointer">
                        <div className="flex justify-center items-center mb-2">
                            <img 
                                src={pokemon.details.sprites.front_default} 
                                alt={pokemon.name} 
                                className="w-32 h-32 object-contain" 
                            />
                        </div>
                        <div className="text-lg font-bold">{pokemon.name}</div>
                        <p className="text-sm">Height: {pokemon.details.height}</p>
                        <p className="text-sm">Weight: {pokemon.details.weight}</p>
                    </div>
                )}
            </div>
        </>
    );
}