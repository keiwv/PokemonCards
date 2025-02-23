import { configureStore } from "@reduxjs/toolkit";
import pokemonsReducer from "./slices/pokemonsSlice";

export const store = configureStore({
    reducer: {
        pokemon: pokemonsReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            thunk: {
                extraArgument: pokemonsReducer,
            },
            serializableCheck: false,
        }),
});
