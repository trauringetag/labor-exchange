import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    open: false
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
        }
    }
});
export default MailingSlice.reducer;
export const { handleOpen, handleClose } = MailingSlice.actions;