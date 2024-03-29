import classes from './Mailing.module.scss';
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { Checkbox } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../../../store/hooks";
import { RootState } from "../../../../store/store";
import { setEmailField, setIsAgree } from "../../../../store/slices/MailingSlice";
import { ChangeEvent } from "react";
import axios from "axios";
import {
    handleOpen,
    setNegativeDescription,
    setPositiveDescription,
    setStatus
} from "../../../../store/slices/ModalSlice";

const Mailing = () => {
    const dispatch = useAppDispatch();

    const isAgree = useAppSelector((state: RootState) => state.mailing.isAgree);
    const emailField = useAppSelector((state: RootState) => state.mailing.emailField);

    const onChangeField = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(setEmailField(e.target.value));
    };

    const submitData = async () => {
        await axios.post('http://localhost:8080/api/email_storage', {
            email: emailField
        }).then(response => {
            dispatch(setStatus(response.status));
            dispatch(setEmailField(''));
            dispatch(setPositiveDescription('Вы подписались на рассылку!'));
            dispatch(handleOpen(true));
        }).catch(error => {
            dispatch(setStatus(error.response.status));
            dispatch(setNegativeDescription('Возникла ошибка с валидацией электронной почты!'));
            dispatch(handleOpen(true));
        });
    };

    return (
        <aside className={classes.wrapper}>
            <h4 className={classes.title}>Вы можете подписаться на рассылку!</h4>
            <form className={classes.form}>
                <div className={classes.container}>
                    <input className={classes.field}
                           type={'email'}
                           placeholder={'Введите Ваш email...'}
                           value={ emailField }
                           onChange={ onChangeField }
                    />
                    <Button className={classes.button} variant={'contained'} disabled={!isAgree} onClick={ submitData }>Подписаться</Button>
                </div>
                <div className={classes.agreement}>
                    <Checkbox onClick={ () => dispatch(setIsAgree(!isAgree)) }/>
                    <label>Я ознакомлен с <Link className={classes.link} to={'/personal-data-policy'}>Политикой обработки персональных данных</Link>!</label>
                </div>
            </form>
        </aside>
    );
};
export default Mailing;