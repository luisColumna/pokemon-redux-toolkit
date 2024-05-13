import { configureStore } from '@reduxjs/toolkit';
import { pokemonSlice } from './slices/pokemon';
import { todosApi } from './apis';

export const store = configureStore({
    reducer: {
         pokemons: pokemonSlice.reducer,

         // con RTK Query (para manejar cache de la data y no consumir data cuando aun tes en cache(1 minuto))
         [todosApi.reducerPath]: todosApi.reducer,
    },
    middleware: ( getDefaultMiddleware) => getDefaultMiddleware()
    .concat( todosApi.middleware )
    // middleware: ( gerDefaultMiddleware ) => getDefaultMiddleware({
    //     serializableCheck: false /* para que no serealice datos como la fecha y no marque error*/
    // })
})