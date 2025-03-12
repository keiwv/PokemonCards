const LOCAL_API = "http://localhost:3000/user/";  // Backend API URL

export const getPokemons = () => {
    return fetch("https://pokeapi.co/api/v2/pokemon?limit=150")
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
    const pokemons = await getPokemons();

    const pokemonsDetails = await Promise.all(
        pokemons.map(async (pokemon) => {
            const details = await getPokemonDetails(pokemon.url);
            return {
                id: details.id,
                name: pokemon.name,
                details,
            };
        })
    );

    return pokemonsDetails;
};

export const login = async (email, password) => {
    try {
        const result = await fetch(`${LOCAL_API}login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, password }),
        });

        if (!result.ok) {
            throw new Error("Credenciales incorrectas");
        }

        return await result.json();
    } catch (error) {
        console.error("Login error:", error);
        throw error;
    }
};


