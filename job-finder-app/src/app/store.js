import { configureStore } from "@reduxjs/toolkit";
import filterReducer from "../features/filter/filterSlice";
import jobReducer from "../features/job/jobSlice";

export const store = configureStore({
    reducer: {
        job: jobReducer,
        filter: filterReducer
    },
});