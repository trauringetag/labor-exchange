import { configureStore } from "@reduxjs/toolkit";
import { SurfaceBlockReducer } from "./Reducers/SurfaceBlockReducer";
import { AboutPageReducer } from "./Reducers/AboutPageReducer";

export const store = configureStore({
    reducer: {
        surfaceBlock: SurfaceBlockReducer,
        aboutPage: AboutPageReducer
    }
});