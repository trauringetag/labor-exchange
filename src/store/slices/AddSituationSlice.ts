import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    period: '',
    unemployed: '',
    are_registered: '',
    number_of_vacancies: ''
};

export const AddSituationSlice = createSlice({
    name: 'add_situation',
    initialState,
    reducers: {
        setPeriod(state, action) {
            state.period = action.payload;
        },
        setUnemployed(state, action) {
            state.unemployed = action.payload;
        },
        setAreRegistered(state, action) {
            state.are_registered = action.payload;
        },
        setNumberOfVacancies(state, action) {
            state.number_of_vacancies = action.payload;
        }
    }
});
export default AddSituationSlice.reducer;
export const {
    setPeriod,
    setUnemployed,
    setAreRegistered,
    setNumberOfVacancies
} = AddSituationSlice.actions;