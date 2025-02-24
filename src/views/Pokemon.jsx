import React, { useEffect, useMemo, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router";
import { fetchPokemonsWithDetails } from "../redux/slices/pokemonsSlice";
import { Link } from "react-router";
import { SimpleNavbar } from "../components/SimpleNavbar";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa"; // Importar íconos de flechas

export default function Pokemon() {
    const { id } = useParams();
    const dispatch = useDispatch();
    const { pokemons, isLoading, error } = useSelector((state) => state.pokemon);
    const [showShiny, setShowShiny] = useState(false);

    const toggleImage = () => {
        setShowShiny(!showShiny);
    };

    const changeImage = () => {
        if (showShiny) {
            setShowShiny(false); 
        } else{
            setShowShiny(true);
        }
    };

    useEffect(() => {
        if (pokemons.length === 0) {
            dispatch(fetchPokemonsWithDetails());
        }
    }, [dispatch, pokemons.length]);

    const pokemon = useMemo(() => {
        const pokemonFound = pokemons?.find((p) => p.id === Number(id));
        return pokemonFound;
    }, [pokemons, id]);

    return (
        <div className="bg-gray-100 min-h-screen">
            <SimpleNavbar />
            <div className="flex justify-center items-center h-[calc(100vh-4rem)]">
                <div className="text-center p-6 bg-white rounded-xl shadow-lg w-4/5 max-w-lg relative">
                    {(isLoading || !pokemon?.name) ? (
                        <p className="text-xl text-pink-400 font-bold">Loading...</p>
                    ) : (
                        <div className="mb-6">
                            {/* Flechas de navegación */}
                            <button
                                onClick={() => changeImage()}
                                className="absolute left-0 top-1/2 transform -translate-y-1/2 p-2 bg-gray-300 rounded-full text-xl text-blue-400 hover:text-blue-500"
                            >
                                <FaArrowLeft />
                            </button>

                            <img
                                className={`w-36 h-36 mx-auto rounded-xl transition-transform duration-500 ease-in-out ${showShiny ? 'scale-110' : 'scale-100'}`}
                                src={showShiny ? pokemon.details.sprites.front_shiny : pokemon.details.sprites.front_default}
                                alt={pokemon.name}
                                onClick={toggleImage}
                            />

                            <button
                                onClick={() => changeImage()}
                                className="absolute right-0 top-1/2 transform -translate-y-1/2 p-2 bg-gray-300 rounded-full text-xl text-blue-400 hover:text-blue-500"
                            >
                                <FaArrowRight />
                            </button>

                            <p className="text-lg text-gray-600">ID: {pokemon.id}</p>
                            <p className="text-3xl text-blue-400 font-bold">{pokemon.name}</p>
                            <p className="text-lg text-gray-700 mb-4">
                                Height: {pokemon.details.height} | Weight: {pokemon.details.weight}
                            </p>
                            <div className="flex flex-wrap justify-center">
                                {pokemon.details.abilities.map((p) => (
                                    <div key={p.ability.name} className="bg-blue-400 text-white m-2 p-2 rounded-full text-sm">
                                        {p.ability.name}
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                    <div className="mt-6">
                        <Link to="/pokemons" className="text-lg text-pink-400 font-bold hover:text-blue-400">
                            Regresar
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
