import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isAgree: false,
    emailField: ''
};

export const MailingSlice = createSlice({
    name: 'mailing',
    initialState,
    reducers: {
        setIsAgree(state, action) {
            state.isAgree = action.payload;
        },
        setEmailField(state, action) {
            state.emailField = action.payload;
        }
    }
});
export default MailingSlice.reducer;
export const { setIsAgree, setEmailField } = MailingSlice.actions;