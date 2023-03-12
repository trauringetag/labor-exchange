import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    articles: [],
    singleArticle: {}
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
        }
    }

});
export default FeedSlice.reducer;
export const { getAllArticles, getSingleArticle } = FeedSlice.actions;