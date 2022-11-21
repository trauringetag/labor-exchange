import classes from './Information.module.scss';

const Information = () => (
    <>
        <section className={classes.block}>
            <p className={classes.text}>Юридический адрес: <span>457352, г. Карталы, Челябинская область, ул. Свердлова 12</span></p>
            <p className={classes.text}>Руководитель: <span>Николай Александрович Плохих</span></p>
            <p className={classes.text}>Бухгалтерия: <a href={'tel:(35133) 2-24-7'}>(35133) 2-24-7</a></p>
            <p className={classes.text}>Отдел трудоустройства: <a href={'(35133) 2-24-95'}>(35133) 2-24-95</a></p>
        </section>
        <p className={classes.text}>Телефон горячей линии: <a href={'2-23-51'}>2-23-51</a></p>
    </>
);
export default Information;