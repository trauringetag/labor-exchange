import { configureStore } from "@reduxjs/toolkit";
import AboutSlice from './slices/AboutSlice';
import SliderSlice from "./slices/SliderSlice";
import FeedSlice from "./slices/FeedSlice";
import SearchSlice from "./slices/SearchSlice";
import MailingSlice from "./slices/MailingSlice";
import ModalSlice from "./slices/ModalSlice";

export const store = configureStore({
    reducer: {
        slider: SliderSlice,
        aboutPage: AboutSlice,
        feedPage: FeedSlice,
        searchField: SearchSlice,
        mailing: MailingSlice,
        modal: ModalSlice
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;