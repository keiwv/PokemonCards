import React, { useEffect } from "react";
import { Link } from "react-router";
import { useSelector } from "react-redux";
import { SimpleNavbar } from "../components/SimpleNavbar";

export default function Welcome() {

    const { pokemons, isLoading, error } = useSelector((state) => state.pokemon);

    return (
        <div className="min-h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 pt-4">
            <SimpleNavbar />
            <div className=" min-h-screen flex flex-col justify-center items-center text-white">
                <div className="text-6xl font-extrabold text-center mb-4 drop-shadow-lg">
                    POKEMONS CARDS
                </div>
                <Link
                    to="/pokemons"
                    className="text-3xl bg-blue-500 hover:bg-blue-600 text-white py-3 px-6 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
                >
                    PRESIONA AQUÍ
                </Link>
            </div>
        </div>
    );
}
