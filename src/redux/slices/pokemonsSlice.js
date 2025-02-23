import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getPokemonsWithDetails } from "../../api";

export const fetchPokemonsWithDetails = createAsyncThunk(
    "pokemons/fetchPokemonsWithDetails",
    async () => {
        const response = await getPokemonsWithDetails();
        console.log(response);
        return response;
    }
);

const pokemonsSlice = createSlice({
    name: "pokemons",
    initialState: {
        pokemons: [],
        favoritePokemons: [],
        isLoading: false,
        error: null,
    },
    reducers: {
        addFavoritePokemons: (state, action) => {
            state.favoritePokemons.push(action.payload);
        },
        removeFavoritePokemons: (state, action) => {
            state.favoritePokemons = state.favoritePokemons.filter(
                (pokemon) => pokemon.name !== action.payload
            );
        },
        clearFavoritePokemonsList: (state) => {
            state.favoritePokemons = [];
        },
    },

    extraReducers: (builder) => {
        // This is recommended when we're using async functions so we can play with the different states (done, loading and error).
        builder
            .addCase(fetchPokemonsWithDetails.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchPokemonsWithDetails.fulfilled, (state, action) => {
                state.isLoading = false;
                state.pokemons = action.payload;
            })
            .addCase(fetchPokemonsWithDetails.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error.message;
            });
    },
});

export const {
    addFavoritePokemons,
    removeFavoritePokemons,
    clearFavoritePokemonsList,
} = pokemonsSlice.actions;

export default pokemonsSlice.reducer;
