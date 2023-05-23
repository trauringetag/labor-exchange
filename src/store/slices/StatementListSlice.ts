import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    statements: []
};

export const StatementListSlice = createSlice({
    name: 'statement_list',
    initialState,
    reducers: {
        setStatements(state, action) {
            state.statements = action.payload;
        }
    }
});
export default StatementListSlice.reducer;
export const { setStatements } = StatementListSlice.actions;