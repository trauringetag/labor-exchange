import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    articles: [],
    singleArticle: {},
    isLoaded: false
};

export const FeedSlice = createSlice({
    name: 'feed',
    initialState,
    reducers: {
        getAllArticles(state, action) {
            state.articles = action.payload;
        },
        getSingleArticle(state, action) {
            state.singleArticle = action.payload;
        },
        changeIsLoaded(state, action) {
            state.isLoaded = action.payload;
        }
    }
});
export default FeedSlice.reducer;
export const { getAllArticles, getSingleArticle, changeIsLoaded } = FeedSlice.actions;