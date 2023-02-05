import classes from './Information.module.scss';
import { useSelector } from 'react-redux';

const Information = () => {
    const information = useSelector(state => state.aboutPage.information);

    return (
        <>
            <section className={classes.block}>
                <p className={classes.text}>Юридический адрес: <span>{ information.legalAddress }</span></p>
                <p className={classes.text}>Руководитель: <span>{ information.supervisor }</span></p>
                <p className={classes.text}>Бухгалтерия: <a href={`tel:${ information.accountingPhone }`}>{ information.accountingPhone }</a></p>
                <p className={classes.text}>Отдел трудоустройства: <a href={`tel:${ information.employmentDepartmentPhone }`}>{ information.employmentDepartmentPhone }</a></p>
            </section>
            <p className={classes.text}>Телефон горячей линии: <a href={`tel:${ information.hotlinePhone }`}>{ information.hotlinePhone }</a></p>
        </>
    );
};
export default Information;