import classes from './Connection.module.scss';
import SocialNetworks from "./SocialNetworks/SocialNetworks";

const Connection = () => (
    <section className={classes.connection}>
        <article>
            <a className={classes.phone} href={'tel:8 (951) 235-85-32'}>8 (951) 235-85-32</a>
            <a className={classes.mail} href={'mailto:krt@szn74.ru'}>krt@szn74.ru</a>
        </article>
        <article>
            <h3 className={classes.address}>Карталы, ул. Свердлова, 12</h3>
            <p className={classes.description}>Мы работаем с 8:30 до 17:30</p>
        </article>
        <SocialNetworks />
    </section>
);
export default Connection;