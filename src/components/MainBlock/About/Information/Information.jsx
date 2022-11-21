import classes from './Information.module.scss';

const Information = props => (
    <>
        <section className={classes.block}>
            <p className={classes.text}>Юридический адрес: <span>{ props.information.legalAddress }</span></p>
            <p className={classes.text}>Руководитель: <span>{ props.information.supervisor }</span></p>
            <p className={classes.text}>Бухгалтерия: <a href={`tel:${ props.information.accountingPhone }`}>{ props.information.accountingPhone }</a></p>
            <p className={classes.text}>Отдел трудоустройства: <a href={`tel:${ props.information.employmentDepartmentPhone }`}>{ props.information.employmentDepartmentPhone }</a></p>
        </section>
        <p className={classes.text}>Телефон горячей линии: <a href={`tel:${ props.information.hotlinePhone }`}>{ props.information.hotlinePhone }</a></p>
    </>
);
export default Information;