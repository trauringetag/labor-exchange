import { configureStore } from "@reduxjs/toolkit";
import { SurfaceBlockReducer } from "./Reducers/SurfaceBlockReducer";

export const store = configureStore({
    reducer: {
        surfaceBlock: SurfaceBlockReducer
    }
});