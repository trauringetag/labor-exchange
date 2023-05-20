import classes from './Contacts.module.scss';
import { FC } from "react";
import { HandySvg } from 'handy-svg';
import VKIcon from '../../../../assets/social/vk.svg';
import TelegramIcon from '../../../../assets/social/telegram.svg';

const Contacts: FC = (): JSX.Element => (
    <aside className={classes.connection}>
        <div>
            <a className={classes.phone} href={'tel:8 (951) 235-85-32'}>8 (951) 235-85-32</a>
            <a className={classes.mail} href={'mailto:krt@szn74.ru'}>krt@szn74.ru</a>
        </div>
        <div>
            <p className={classes.address}>Карталы, ул. Свердлова, 12</p>
            <p className={classes.description}>Мы работаем с 8:30 до 17:30</p>
        </div>
        <div className={classes.social}>
            <a className={classes.link}
               href={'https://vk.com/public191437741'}
               target={'_blank'}
               rel={'noopener noreferrer'}
            >
                <HandySvg src={VKIcon} className={classes.vk} />
            </a>
            <a className={classes.link}
               href={'https://t.me/AnatoliyVdovin'}
               target={'_blank'}
               rel={'noopener noreferrer'}
            >
                <HandySvg src={TelegramIcon} className={classes.telegram} />
            </a>
        </div>
    </aside>
);
export default Contacts;