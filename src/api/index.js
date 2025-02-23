export const getPokemons = () => {
    return fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
        .then((response) => {
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.json();
        })
        .then((data) => data.results)
        .catch((error) =>
            console.error(
                "There was a problem with your fetch operation:",
                error
            )
        );
};

export const getPokemonDetails = (url) => {
    return fetch(url)
        .then((response) => {
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.json();
        })
        .catch((error) =>
            console.error(
                "There was a problem with your fetch operation:",
                error
            )
        );
};

export const getPokemonsWithDetails = async () => {
    const pokemons = getPokemons(); 

    const PokemonsDetails = await Promise.all(
        pokemons.map(async (pokemon) => {
            const details = await getPokemonDetails(pokemon.url);
            return {
                name: pokemon.name,
                details: details,
            };
        })
    );

    return PokemonsDetails;
};

