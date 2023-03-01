import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    articles: []
};

export const FeedSlice = createSlice({
    name: 'feed',
    initialState,
    reducers: {
        getAllArticles(state, action) {
            state.articles = action.payload;
        }
    }

});
export default FeedSlice.reducer;
export const { getAllArticles } = FeedSlice.actions;