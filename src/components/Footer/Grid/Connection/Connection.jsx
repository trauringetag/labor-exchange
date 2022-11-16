import classes from './Connection.module.scss';
import { VK } from "../../../CommonComponents/SVG/VK";
import { Telegram } from "../../../CommonComponents/SVG/Telegram";
import { WhatsApp } from "../../../CommonComponents/SVG/WhatsApp";

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
        <ul className={classes.list}>
            <li>
                <a className={classes.link} href={'/'}><VK /></a>
            </li>
            <li>
                <a className={classes.link} href={'/'}><Telegram /></a>
            </li>
            <li>
                <a className={classes.link} href={'/'}><WhatsApp /></a>
            </li>
        </ul>
    </section>
);
export default Connection;