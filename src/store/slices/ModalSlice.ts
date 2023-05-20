import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    open: false,
    status: 0,
    positiveDescription: '',
    negativeDescription: ''
};

export const MailingSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        handleOpen(state, action) {
            state.open = action.payload;
        },
        handleClose(state, action) {
            state.open = action.payload;
        },
        setStatus(state, action) {
            state.status = action.payload;
        },
        setPositiveDescription(state, action) {
            state.positiveDescription = action.payload;
        },
        setNegativeDescription(state, action) {
            state.negativeDescription = action.payload;
        }
    }
});
export default MailingSlice.reducer;
export const {
    handleOpen,
    handleClose,
    setStatus,
    setPositiveDescription,
    setNegativeDescription
} = MailingSlice.actions;