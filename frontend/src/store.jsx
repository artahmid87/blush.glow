import { configureStore } from "@reduxjs/toolkit";
import { Api } from "./redux/api/Api";

export const store = configureStore({
    reducer: {
        [Api.reducerPath]:Api.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(Api.middleware),
})