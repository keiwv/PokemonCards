import { configureStore } from "@reduxjs/toolkit";
import pokemonsReducer from "./slices/pokemonsSlice";
import authReducer from "./slices/authSlice";

export const store = configureStore({
    reducer: {
        pokemon: pokemonsReducer,
        auth: authReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            thunk: {
                extraArgument: pokemonsReducer,
            },
            serializableCheck: false,
        }),
});
