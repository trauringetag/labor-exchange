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
            const statement = state.statements.find((s: any) => s.id === action.payload);
            if (statement) {
                statement.processed = true;
            }
        }
    }
});

export default StatementListSlice.reducer;
export const { setStatements, deleteProcessedRequest } = StatementListSlice.actions;