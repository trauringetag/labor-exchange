import classes from './Interview.module.scss';
import { Link } from 'react-router-dom';
import Button from "@mui/material/Button";
import PageTitle from "../../components/CommonComponents/PageTitle/PageTitle";

const Interview = () => (
    <PageTitle title={'Опрос для граждан и работадателей'}>
        <div className={classes.information}>
            <p className={`${classes.text} ${classes.bold}`}>Просим граждан и работодателей принять участие в опросе.</p>
            <p className={`${classes.text} ${classes.bold}`}>Центр занятости населения города Карталы проводит опрос граждан и работодателей по удовлетворенности полнотой, доступностью и качеством получаемых государственных услуг.</p>
            <p className={classes.text}>Чтобы принять участие в опросе необходимо скачать формы опросников, заполнить их в электронном виде и направить в Центр занятости населения на адрес электронной почты <a className={classes.link} href={'mailto:krt@szn74.ru'}>krt@szn74.ru</a>.</p>
        </div>
        <ul className={classes.list}>
            <li className={classes.item}>
                <Link to={'/documents/interview/Для граждан.doc'} target={'_blank'} download>
                    <Button className={classes.button} variant="contained">Для граждан</Button>
                </Link>
            </li>
            <li className={classes.item}>
                <Link to={'/documents/interview/Для работадателей.doc'} target={'_blank'} download>
                    <Button className={classes.button} variant="contained">Для работадателей</Button>
                </Link>
            </li>
        </ul>
        <div className={classes.information}>
            <p className={`${classes.text} ${classes.bold}`}>Полученные данные являются строго конфиденциальными и будут использованы только для анализа работы Службы занятости населения региона.</p>
            <p className={`${classes.text} ${classes.italic}`}>Время прохождения: ~ 5-10 минут.</p>
            <p className={classes.text}>Большое спасибо за сотрудничество!</p>
        </div>
    </PageTitle>
);
export default  Interview;