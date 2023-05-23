import classes from './Login.module.scss';
import {ChangeEvent, FC, useEffect} from "react";
import { useLocation, useNavigate } from 'react-router-dom';
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import sha256 from 'crypto-js/sha256';
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { setAvailable, setCurrentPassword, setRequiredPassword } from "../../store/slices/CheckPasswordSlice";
import { RootState } from "../../store/store";
import { handleOpen, setNegativeDescription, setStatus } from "../../store/slices/ModalSlice";
import axios from "axios";

const Login: FC = (): JSX.Element => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        axios.get('http://localhost:8080/api/accounts').then(response => {
            const searchTerm = 'Администратор';
            const adminPassword = response.data.find((item: any) => item.privilege === searchTerm).hashed_password;
            dispatch(setRequiredPassword(adminPassword));
        });
    }, [dispatch]);

    const currentPassword = useAppSelector((state: RootState) => state.checkPassword.currentPassword);
    const requiredPassword = useAppSelector((state: RootState) => state.checkPassword.requiredPassword);

    const navigate = useNavigate();
    const location = useLocation();
    const fromPage = location.state?.from.pathname || '/';

    const handleChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(setCurrentPassword(e.target.value));
    };

    const checkPassword = () => {
        const hashPassword = sha256(currentPassword).toString();

        if (hashPassword === requiredPassword) {
            dispatch(setAvailable(true));
            navigate(fromPage);
        } else {
            dispatch(setStatus(400));
            dispatch(setNegativeDescription('Вы ввели неверный пароль!'));
            dispatch(handleOpen(true));
        }
    };

    return (
        <section className={classes.wrapper}>
            <h1 className={classes.title}>Вход в панель администратора</h1>
            <p className={classes.description}>Пожалуйста, введите пароль администратора для перехода в панель управления.</p>
            <Box
                component={'form'}
                sx={{ '& > :not(style)': { width: '100%' } }}
                noValidate
                autoComplete={'off'}
                className={classes.form}
            >
                <TextField
                    id={'password'}
                    label={'Пароль'}
                    variant={'outlined'}
                    type={'password'}
                    onChange={handleChangePassword}
                    value={currentPassword}
                />
                <Button className={classes.button} variant={'contained'} onClick={checkPassword}>Войти</Button>
            </Box>
        </section>
    );
};
export default Login;