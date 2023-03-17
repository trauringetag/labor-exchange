import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isAgree: true
};

export const MailingSlice = createSlice({
    name: 'mailing',
    initialState,
    reducers: {
        setIsAgree(state, action) {
            state.isAgree = action.payload;
        }
    }
});
export default MailingSlice.reducer;
export const { setIsAgree } = MailingSlice.actions;