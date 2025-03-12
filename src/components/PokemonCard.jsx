import React, { useState } from "react";
import { Link } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as solidStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as regularStar } from "@fortawesome/free-regular-svg-icons";

export default function PokemonCard({ pokemon }) {
    const [isFavorite, setIsFavorite] = useState(false);

    const toggleFavorite = () => {
        setIsFavorite(!isFavorite);
    };

    return (
        <>
            <div>
                {pokemon && (
                    <Link to={`/pokemons/${pokemon.id}`}>
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
                            <button 
                                onClick={(e) => {
                                    e.preventDefault();
                                    toggleFavorite();
                                }} 
                                className="mt-2"
                            >
                                <FontAwesomeIcon icon={isFavorite ? solidStar : regularStar} />
                            </button>
                        </div>
                    </Link>
                )}
            </div>
        </>
    );
}