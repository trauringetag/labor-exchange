import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    monthlyData: []
};

export const LaborMarketSlice = createSlice({
    name: 'labor_market',
    initialState,
    reducers: {
        getMonthlyData(state, action) {
            state.monthlyData = action.payload;
        }
    }
});
export default LaborMarketSlice.reducer;
export const { getMonthlyData } = LaborMarketSlice.actions;