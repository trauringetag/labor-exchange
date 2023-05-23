import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentPassword: '',
    requiredPassword: '',
    available: false
};

export const CheckPasswordSlice = createSlice({
    name: 'check_password',
    initialState,
    reducers: {
        setCurrentPassword(state, action) {
            state.currentPassword = action.payload;
        },
        setRequiredPassword(state, action) {
            state.requiredPassword = action.payload;
        },
        setAvailable(state, action) {
            state.available = action.payload;
        }
    }
});
export default CheckPasswordSlice.reducer;
export const { setCurrentPassword, setRequiredPassword, setAvailable } = CheckPasswordSlice.actions;