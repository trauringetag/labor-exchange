import classes from './Legislation.module.scss';
import PageTitle from "../../components/CommonComponents/PageTitle/PageTitle";
import { Link } from 'react-router-dom';

const Legislation = () => (
    <PageTitle title={'Законодательство'}>
        <ul className={classes.list}>
            <li>
                <Link className={classes.link} to={'/legislation/appeal-procedure'}>Порядок обжалования</Link>
            </li>
            <li>
                <Link className={classes.link} to={'/legislation/review'}>Изменения в законодательстве о занятости населения (с 01.01.2019г.)</Link>
            </li>
        </ul>
    </PageTitle>
);
export default Legislation;