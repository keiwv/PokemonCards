import React from "react";
import { NavLink, Link } from "react-router";


export default function Welcome()
{

    /* I will make it prettier. */
    return <>
       <div>
        VIENVENIDO BRO!!!
       </div>
        <Link to='/pokemons' className="text-4xl"> PRESIONA AQUÍ </Link>
    </>
}