import React from "react";
import { useSelector } from "react-redux";
import { SimpleNavbar } from "../components/SimpleNavbar";
import PokemonCard from "../components/PokemonCard";

export default function Favorite() {
    const { user, isLoggedIn } = useSelector((state) => state.auth);

    console.log(user.favoritePokemons);

    return (
        <div className="pt-4 bg-gray-700 w-full">
            <SimpleNavbar />
            {user ? (
                user.favoritePokemons.length > 0 ? (
                    <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-10 gap-4 p-4 ">
                        {user.favoritePokemons.map((pokemon) => (
                            <PokemonCard key={pokemon.id} pokemon={pokemon} />
                        ))}
                    </div>
                ) : (
                    <div className="flex justify-center items-center h-screen">
                        <p className="text-white text-2xl">No tienes pokemons favoritos</p>
                    </div>
                )
            ) : (
                <div className="flex justify-center items-center h-screen">
                    <p className="text-white text-2xl">Necesitas iniciar sesión para ver tus pokemons favoritos</p>
                </div>
            )}
        </ div>);
}