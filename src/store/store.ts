import { configureStore } from "@reduxjs/toolkit";
import AboutSlice from './slices/AboutSlice';
import SliderSlice from "./slices/SliderSlice";
import FeedSlice from "./slices/FeedSlice";

export const store = configureStore({
    reducer: {
        slider: SliderSlice,
        aboutPage: AboutSlice,
        feedPage: FeedSlice
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;