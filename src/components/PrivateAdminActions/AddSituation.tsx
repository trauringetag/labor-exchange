import classes from './Common.module.scss';
import { ChangeEvent, FC } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { RootState } from "../../store/store";
import {
    setAreRegistered,
    setNumberOfVacancies,
    setPeriod,
    setUnemployed
} from "../../store/slices/AddSituationSlice";
import axios from "axios";
import {
    handleOpen,
    setNegativeDescription,
    setPositiveDescription,
    setStatus
} from "../../store/slices/ModalSlice";

const AddSituation: FC = (): JSX.Element => {
    const dispatch = useAppDispatch();

    const period = useAppSelector((state: RootState) => state.addSituation.period);
    const unemployed = useAppSelector((state: RootState) => state.addSituation.unemployed);
    const areRegistered = useAppSelector((state: RootState) => state.addSituation.are_registered);
    const numberOfVacancies = useAppSelector((state: RootState) => state.addSituation.number_of_vacancies);

    const handleChangePeriod = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(setPeriod(e.target.value));
    };
    const handleChangeUnemployed = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(setUnemployed(e.target.value));
    };
    const handleChangeAreRegistered = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(setAreRegistered(e.target.value));
    };
    const handleChangeNumberOfVacancies = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(setNumberOfVacancies(e.target.value));
    };

    const submitData = async () => {
        await axios.post('http://localhost:8080/api/situation_labor_market', {
            period: period,
            unemployed: unemployed,
            are_registered: areRegistered,
            number_of_vacancies: numberOfVacancies
        }).then(response => {
            dispatch(setStatus(response.status));
            dispatch(setPeriod(''));
            dispatch(setUnemployed(''));
            dispatch(setAreRegistered(''));
            dispatch(setNumberOfVacancies(''));
            dispatch(setPositiveDescription('Данные успешно добавлены!'));
            dispatch(handleOpen(true));
        }).catch(error => {
            dispatch(setStatus(error.response.status));
            dispatch(setNegativeDescription('Возникла ошибка при добавлении данных на сервер! Пожалуйста, перепроверьте все поля!'));
            dispatch(handleOpen(true));
        });
    };

    return (
        <Box
            component={'form'}
            sx={{ '& > :not(style)': { width: '100%' } }}
            noValidate
            autoComplete={'off'}
            className={classes.form}
        >
            <h3>Новое положение на рынке труда</h3>
            <TextField
                id={'period'}
                label={'Период'}
                variant={'outlined'}
                value={period}
                onChange={handleChangePeriod}
            />
            <TextField
                id={'unemployed'}
                label={'Количество безработных'}
                type={'number'}
                variant={'outlined'}
                value={unemployed}
                onChange={handleChangeUnemployed}
            />
            <TextField
                id={'are_registered'}
                label={'Состоят на учёте'}
                type={'number'}
                variant={'outlined'}
                value={areRegistered}
                onChange={handleChangeAreRegistered}
            />
            <TextField
                id={'number_of_vacancies'}
                label={'Количество вакансий'}
                type={'number'}
                variant={'outlined'}
                value={numberOfVacancies}
                onChange={handleChangeNumberOfVacancies}
            />
            <Button variant={'contained'} onClick={submitData}>Добавить</Button>
        </Box>
    );
};
export default AddSituation;