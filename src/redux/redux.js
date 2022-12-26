import { configureStore } from "@reduxjs/toolkit";
import { SliderReducer } from "./Reducers/SliderReducer";
import { AboutReducer } from "./Reducers/AboutReducer";

export const store = configureStore({
    reducer: {
        surfaceBlock: SliderReducer,
        aboutPage: AboutReducer
    }
});