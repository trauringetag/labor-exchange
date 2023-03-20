import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isAgree: true,
    status: 0,
    emailField: ''
};

export const MailingSlice = createSlice({
    name: 'mailing',
    initialState,
    reducers: {
        setIsAgree(state, action) {
            state.isAgree = action.payload;
        },
        setStatus(state, action) {
            state.status = action.payload;
        },
        setEmailField(state, action) {
            state.emailField = action.payload;
        }
    }
});
export default MailingSlice.reducer;
export const { setIsAgree, setStatus, setEmailField } = MailingSlice.actions;