import classes from './Interview.module.scss';

const Interview = () => (
    <section className={classes.wrapper}>
        <h2 className={classes.title}>Опрос для граждан и работодателей</h2>
        <hr className={classes.underlining} />
        <div>
            <p className={`${classes.text} ${classes.bold}`}>Просим граждан и работодателей принять участие в опросе.</p>
            <p className={`${classes.text} ${classes.bold}`}>Центр занятости населения города Карталы проводит опрос граждан и работодателей по удовлетворенности полнотой, доступностью и качеством получаемых государственных услуг.</p>
            <p className={classes.text}>Чтобы принять участие в опросе необходимо скачать формы опросников, заполнить их в электронном виде и направить в Центр занятости населения на адрес электронной почты <a className={classes.link} href={'krt@szn74.ru'}>krt@szn74.ru</a>.</p>
        </div>
    </section>
);
export default  Interview;