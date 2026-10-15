import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    fullName: '',
    email: '',
    address: '',
    phone: '',
    categoryId: null as number | null,
    socialStatusId: null as number | null,
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
        setCategoryId(state, action) {
            state.categoryId = action.payload;
        },
        setSocialStatusId(state, action) {
            state.socialStatusId = action.payload;
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
    setCategoryId,
    setSocialStatusId,
    setTextAppeal,
    setIsAgree
} = OnlineReceptionSlice.actions;