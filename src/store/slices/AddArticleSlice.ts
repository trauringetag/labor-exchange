import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    cover: '',
    head: '',
    preview: '',
    body: ''
};

export const AddArticleSlice = createSlice({
    name: 'add_article',
    initialState,
    reducers: {
        setCover(state, action) {
            state.cover = action.payload;
        },
        setHead(state, action) {
            state.head = action.payload;
        },
        setPreview(state, action) {
            state.preview = action.payload;
        },
        setBody(state, action) {
            state.body = action.payload;
        }
    }
});
export default AddArticleSlice.reducer;
export const {
    setCover,
    setHead,
    setPreview,
    setBody
} = AddArticleSlice.actions;