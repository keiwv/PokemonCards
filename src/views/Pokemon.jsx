import React, { useEffect, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router";
import { fetchPokemonsWithDetails } from "../redux/slices/pokemonsSlice";

export default function Pokemon() {
    const { id } = useParams();
    const dispatch = useDispatch();
    const { pokemons, isLoading, error } = useSelector((state) => state.pokemon);

    useEffect(() => {
        if (pokemons.length === 0) {
            dispatch(fetchPokemonsWithDetails());;
        }

    }, [dispatch, pokemons.length]);

    const pokemon = useMemo(() => {
        const pokemonFound = pokemons?.find((p) => p.id === Number(id));
        console.log(pokemonFound);
        return pokemonFound;
    }, [pokemons, id]);

    return (
        <div>
            {isLoading ? (
                <p>Loading...</p>
            ) : (
                <div>
                    <p>{pokemon?.name ?? "Pokemon not found"}</p>
                </div>
            )}
        </div>
    );
}
