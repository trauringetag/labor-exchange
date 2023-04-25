import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    services: [],
    workingMode: [],
    information: {
        legalAddress: '457352, Челябинская область, Карталинский район, город Карталы, ул. Свердлова, д.12',
        supervisor: 'Климова Ольга Александровна',
        accountingPhone: '(35133) 2-24-7',
        employmentDepartmentPhone: '(35133) 2-24-95',
        hotlinePhone: '2-23-51'
    }
};

export const AboutSlice = createSlice({
    name: 'about',
    initialState,
    reducers: {
        setAllServices(state, action) {
            state.services = action.payload;
        },
        setAllWorkingMode(state, action) {
            state.workingMode = action.payload;
        }
    }
});
export default AboutSlice.reducer;
export const { setAllServices, setAllWorkingMode } = AboutSlice.actions;