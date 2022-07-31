import { configureStore } from "@reduxjs/toolkit";
import webSlice from "./webSlice";


export const store = configureStore({
    reducer: {
        web : webSlice,
    }
})