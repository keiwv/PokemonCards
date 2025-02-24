import React from "react";
import {
    Navbar,
    Collapse,
    Typography,
    IconButton,
    Input
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import logo from '../assets/logo.png'

function NavList() {
    return (
        <ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
            <Typography
                as="li"
                variant="small"
                color="black"
                className="p-1 font-medium"
            >
                <a href="/" className="flex items-center hover:text-blue-500 transition-colors">
                    Inicio
                </a>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="black"
                className="p-1 font-medium"
            >
                <a href="/pokemons" className="flex items-center hover:text-blue-500 transition-colors">
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
    const [openNav, setOpenNav] = React.useState(false);
    const [searchQuery, setSearchQuery] = React.useState("");

    const handleWindowResize = () =>
        window.innerWidth >= 960 && setOpenNav(false);

    React.useEffect(() => {
        window.addEventListener("resize", handleWindowResize);

        return () => {
            window.removeEventListener("resize", handleWindowResize);
        };
    }, []);

    return (
        <Navbar className="mx-auto px-5 py-3 mb-2">
            <div className="flex items-center space-x-2 w-full">
                <img src={logo} alt="" className="h-5 w-5" />
                <Typography
                    as="a"
                    href="/"
                    variant="h6"
                    color="black"
                    className="mr-4 cursor-pointer py-1.5"
                >
                    Pokemon Cards
                </Typography>

                {/* Barra de búsqueda en pantallas grandes */}
                <div className=" lg:block flex-1 mx-4">
                    <Input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        label="Buscar Pokemón"
                        className={`w-full text-black border ${searchQuery ? 'bg-gray-300' : 'border-white'}`}
                    />
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
