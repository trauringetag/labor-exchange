import classes from './Mailing.module.scss';
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { Checkbox } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../../../store/hooks";
import { RootState } from "../../../../store/store";
import { setIsAgree } from "../../../../store/slices/MailingSlice";

const Mailing = () => {
    const dispatch = useAppDispatch();
    const isAgree = useAppSelector((state: RootState) => state.mailing.isAgree);

    return (
        <aside className={classes.wrapper}>
            <h4 className={classes.title}>Вы можете подписаться на рассылку!</h4>
            <form className={classes.form}>
                <div className={classes.container}>
                    <input className={classes.field}
                           type={'email'}
                           placeholder={'Введите Ваш email...'}
                    />
                    <Button className={classes.button} variant={'contained'} disabled={isAgree}>Подписаться</Button>
                </div>
                <div className={classes.agreement}>
                    <Checkbox onClick={ () => dispatch(setIsAgree(!isAgree)) }/>
                    <label>Я ознакомлен с <Link className={classes.link} to={'/personal-data-policy'}>Политикой обработки персональных данных!</Link></label>
                </div>
            </form>
        </aside>
    );
};
export default Mailing;