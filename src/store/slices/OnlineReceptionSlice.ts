import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    fullName: '',
    email: '',
    address: '',
    phone: '',
    category: 'Предложение',
    socialStatus: 'Не указан',
    textAppeal: '',
    isAgree: false
};

export const OnlineReceptionSlice = createSlice({
    name: 'online_reception',
    initialState,
    reducers: {
        setFullName(state, action) {
            state.fullName = action.payload;
        },
        setEmail(state, action) {
            state.email = action.payload;
        },
        setAddress(state, action) {
            state.address = action.payload;
        },
        setPhone(state, action) {
            state.phone = action.payload;
        },
        setTextAppeal(state, action) {
            state.textAppeal = action.payload;
        },
        setCategory(state, action) {
            state.category = action.payload;
        },
        setSocialStatus(state, action) {
            state.socialStatus = action.payload;
        },
        setIsAgree(state, action) {
            state.isAgree = action.payload;
        }
    }
});
export default OnlineReceptionSlice.reducer;
export const {
    setFullName,
    setEmail,
    setAddress,
    setPhone,
    setCategory,
    setSocialStatus,
    setTextAppeal,
    setIsAgree
} = OnlineReceptionSlice.actions;