import { configureStore } from "@reduxjs/toolkit";
import AboutSlice from './slices/AboutSlice';
import SliderSlice from "./slices/SliderSlice";

export const store = configureStore({
    reducer: {
        slider: SliderSlice,
        aboutPage: AboutSlice
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;