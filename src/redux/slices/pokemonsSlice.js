import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getPokemonsWithDetails } from "../../api";

export const fetchPokemonsWithDetails = createAsyncThunk(
    "pokemons/fetchPokemonsWithDetails",
    async () => {
      const response = await getPokemonsWithDetails();
      const data = response.json();
      return data.results;
    }
);

export const pokemonSlice = createSlice({
    name: "pokemons",
    initialState: {
        pokemons: [],
        favoritePokemons: [],
        isLoading: Boolean,
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

    extraReducers: (builder) => { // This is recommended when we're using async functions so we can play with the different states (done, loading and error).
      builder
      .addCase(fetchPokemonsWithDetails.pending, (state) => {state.isLoading = true})
      .addCase(fetchPokemonsWithDetails.fulfilled, (state, action) =>{
        state.pokemons = action.payload;
        state.isLoading = false;
      });
    }
});

export const { addFavoritePokemons, removeFavoritePokemons, clearFavoritePokemonsList } =
    pokemonSlice.actions;

export default pokemonSlice.reducer;
