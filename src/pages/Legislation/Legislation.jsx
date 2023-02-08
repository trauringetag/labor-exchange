import classes from './Legislation.module.scss';
import Wrapper from "../../components/CommonComponents/Wrapper/Wrapper";
import { Link } from 'react-router-dom';

const Legislation = () => (
    <Wrapper title={'Законодательство'}>
        <ul className={classes.list}>
            <li>
                <Link className={classes.link} to={'/legislation/appeal-procedure'}>Порядок обжалования</Link>
            </li>
            <li>
                <Link className={classes.link} to={'/legislation/legislative-changes'}>Изменения в законодательстве о занятости населения (с 01.01.2019г.)</Link>
            </li>
        </ul>
    </Wrapper>
);
export default Legislation;