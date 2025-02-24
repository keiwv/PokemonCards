import React, { useEffect, useState } from "react";
import {
    Navbar,
    Collapse,
    Typography,
    IconButton,
    Input
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import logo from '../assets/logo.png';
import { useDispatch, useSelector } from "react-redux";
import { fetchPokemonsWithDetails } from "../redux/slices/pokemonsSlice";
import { Link } from "react-router";

function NavList() {
    return (
        <ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
            <Typography
                as="li"
                variant="small"
                color="black"
                className="p-1 font-medium"
            >
                <a href="/PokemonCards" className="flex items-center hover:text-blue-500 transition-colors">
                    Inicio
                </a>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="black"
                className="p-1 font-medium"
            >
                <a href="/PokemonCards/pokemons" className="flex items-center hover:text-blue-500 transition-colors">
                    Pokemones
                </a>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="black"
                className="p-1 font-medium"
            >
                <a href="#" className="flex items-center hover:text-blue-500 transition-colors">
                    Favoritos
                </a>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="black"
                className="p-1 font-medium"
            >
                <a href="https://github.com/keiwv/PokemonCards" className="flex items-center hover:text-blue-500 transition-colors">
                    Github
                </a>
            </Typography>
        </ul>
    );
}

export function SimpleNavbar() {
    const [openNav, setOpenNav] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const [filteredPokemons, setFilteredPokemons] = useState([]);

    const dispatch = useDispatch();
    const { pokemons } = useSelector((state) => state.pokemon);

    useEffect(() => {
        if (pokemons.length === 0) {
            dispatch(fetchPokemonsWithDetails());
        }
    }, [dispatch]);

    const handleWindowResize = () =>
        window.innerWidth >= 960 && setOpenNav(false);

    useEffect(() => {
        window.addEventListener("resize", handleWindowResize);

        return () => {
            window.removeEventListener("resize", handleWindowResize);
        };
    }, []);



    const handleSearch = (query) => {
        setSearchQuery(query);

        if (query) {
            const results = pokemons.filter(pokemon =>
                pokemon.name.toLowerCase().includes(query.toLowerCase()) ||
                pokemon.id.toString().includes(query)
            );
            setFilteredPokemons(results);
        } else {
            setFilteredPokemons([]);
        }
    };



    return (
        <Navbar className="sticky top-0 z-50 mx-auto px-5 py-3 mb-2">
            <div className="flex items-center space-x-2 w-full">
                <img src={logo} alt="" className="h-5 w-5" />
                <Typography
                    as="a"
                    href="/PokemonCards"
                    variant="h6"
                    color="black"
                    className="mr-4 cursor-pointer py-1.5"
                >
                    Pokemon Cards
                </Typography>

                {/* Barra de búsqueda en pantallas grandes */}
                <div className="relative z-50">
                    <Input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => handleSearch(e.target.value)}
                        label="Buscar Pokemón por nombre o ID"
                        className={`w-full text-black border ${searchQuery ? 'bg-gray-300' : 'border-white'}`}
                    />

                    {filteredPokemons.length > 0 && (
                        <ul className="absolute w-full bg-white border mt-1 max-h-60 overflow-auto z-50">
                            {filteredPokemons.map((pokemon) => (
                                <li key={pokemon.id}>
                                    <Link
                                        to={`/pokemons/${pokemon.id}`}
                                        className="px-4 py-2 flex items-center space-x-3 hover:bg-gray-200 cursor-pointer text-black"
                                    >
                                        <img
                                            src={pokemon.details.sprites.front_default}
                                            alt={pokemon.name}
                                            className="w-10 h-10 rounded"
                                        />
                                        <span>{pokemon.name}</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>



                <div className="ml-auto hidden lg:block">
                    <NavList />
                </div>

                {/* Icono de menú en pantallas pequeñas */}
                <IconButton
                    variant="text"
                    className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                    ripple={false}
                    onClick={() => setOpenNav(!openNav)}
                >
                    {openNav ? (
                        <XMarkIcon className="h-6 w-6" strokeWidth={2} color="black" />
                    ) : (
                        <Bars3Icon className="h-6 w-6" strokeWidth={2} color="black" />
                    )}
                </IconButton>
            </div>
            <Collapse open={openNav}>
                <NavList />
            </Collapse>
        </Navbar>
    );
}
