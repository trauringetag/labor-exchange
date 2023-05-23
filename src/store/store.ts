import { configureStore } from "@reduxjs/toolkit";
import AboutSlice from './slices/AboutSlice';
import SliderSlice from "./slices/SliderSlice";
import FeedSlice from "./slices/FeedSlice";
import SearchSlice from "./slices/SearchSlice";
import MailingSlice from "./slices/MailingSlice";
import ModalSlice from "./slices/ModalSlice";
import LaborMarketSlice from "./slices/LaborMarketSlice";
import OnlineReceptionSlice from "./slices/OnlineReceptionSlice";
import CheckPasswordSlice from "./slices/CheckPasswordSlice";
import AddSituationSlice from "./slices/AddSituationSlice";
import AddArticleSlice from "./slices/AddArticleSlice";
import StatementListSlice from "./slices/StatementListSlice";

export const store = configureStore({
    reducer: {
        slider: SliderSlice,
        aboutPage: AboutSlice,
        feedPage: FeedSlice,
        searchField: SearchSlice,
        mailing: MailingSlice,
        modal: ModalSlice,
        laborMarket: LaborMarketSlice,
        onlineReception: OnlineReceptionSlice,
        checkPassword: CheckPasswordSlice,
        addSituation: AddSituationSlice,
        addArticle: AddArticleSlice,
        statementList: StatementListSlice
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;