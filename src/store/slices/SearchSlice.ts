import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    field: ''
};

export const FeedSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        updateField(state, action) {
            state.field = action.payload;
        }
    }
});
export default FeedSlice.reducer;
export const { updateField } = FeedSlice.actions;