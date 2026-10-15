import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../store/hooks';
import Wrapper from '../../components/CommonComponents/Wrapper/Wrapper';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import { handleOpen, setPositiveDescription, setNegativeDescription, setStatus } from '../../store/slices/ModalSlice';
import { setAvailable } from '../../store/slices/CheckPasswordSlice';

const Login: React.FC = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            const response = await axios.post('http://localhost:8080/api/accounts/login', {
                username,
                password
            });

            if (response.status === 200) {
                localStorage.setItem('user', JSON.stringify(response.data.user));
                
                dispatch(setAvailable(true));
                
                dispatch(setStatus(200));
                dispatch(setPositiveDescription('Добро пожаловать в панель администратора!'));
                dispatch(handleOpen(true));
                
                navigate('/admin');
            }
        } catch (error: any) {
            dispatch(setStatus(error.response?.status || 500));
            dispatch(setNegativeDescription(error.response?.data?.message || 'Ошибка авторизации. Проверьте логин и пароль.'));
            dispatch(handleOpen(true));
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <Wrapper title={'Вход в панель администратора'}>
            <Box
                component="form"
                onSubmit={handleLogin}
                sx={{
                    maxWidth: 400,
                    mx: 'auto',
                    mt: 4,
                    p: 3,
                    boxShadow: 3,
                    borderRadius: 2,
                    bgcolor: 'background.paper'
                }}
                noValidate
                autoComplete="off"
            >
                <Typography variant="h5" component="h1" gutterBottom align="center">
                    Авторизация
                </Typography>
                
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="username"
                    label="Логин"
                    name="username"
                    autoComplete="username"
                    autoFocus
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Пароль"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                    disabled={isLoading}
                >
                    {isLoading ? 'Вход...' : 'Войти'}
                </Button>
            </Box>
        </Wrapper>
    );
};

export default Login;