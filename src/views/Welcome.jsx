import React from "react";
import { NavLink, Link } from "react-router";


export default function Welcome()
{
    return <>
       <div>
        VIENVENIDO BRO!!!
       </div>

        <Link to='/Pokemons'> VAMOS AL INISIO BRO </Link>
    </>
}