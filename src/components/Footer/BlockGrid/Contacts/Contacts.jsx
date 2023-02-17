import classes from './Contacts.module.scss';
import { VK } from "../../../CommonComponents/SocialIcons/VK";
import { Telegram } from "../../../CommonComponents/SocialIcons/Telegram";
import { WhatsApp } from "../../../CommonComponents/SocialIcons/WhatsApp";

const Contacts = () => (
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
                <VK />
            </a>
            <a className={classes.link}
               href={'https://t.me/AnatoliyVdovin'}
               target={'_blank'}
               rel={'noopener noreferrer'}
            >
                <Telegram />
            </a>
            <a className={classes.link}
               href={'https://wa.me/73513355780'}
               target={'_blank'}
               rel={'noopener noreferrer'}
            >
                <WhatsApp />
            </a>
        </div>
    </aside>
);
export default Contacts;