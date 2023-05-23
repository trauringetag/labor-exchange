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
        },
        deleteProcessedRequest(state: any, action) {
            state.statements[action.payload - 1].processed = true;
        }
    }
});
export default StatementListSlice.reducer;
export const { setStatements, deleteProcessedRequest } = StatementListSlice.actions;