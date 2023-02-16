import classes from './SocialNetworks.module.scss';
import { VK } from "../../../../CommonComponents/SocialIcons/VK";
import { Telegram } from "../../../../CommonComponents/SocialIcons/Telegram";
import { WhatsApp } from "../../../../CommonComponents/SocialIcons/WhatsApp";

const SocialNetworks = () => (
    <ul className={classes.list}>
        <li>
            <a className={classes.link}
               href={'https://vk.com/public191437741'}
               target={'_blank'}
               rel={'noopener noreferrer'}
            >
                <VK />
            </a>
        </li>
        <li>
            <a className={classes.link}
               href={'https://t.me/AnatoliyVdovin'}
               target={'_blank'}
               rel={'noopener noreferrer'}
            >
                <Telegram />
            </a>
        </li>
        <li>
            <a className={classes.link}
               href={'https://wa.me/73513355780'}
               target={'_blank'}
               rel={'noopener noreferrer'}
            >
                <WhatsApp />
            </a>
        </li>
    </ul>
);
export default SocialNetworks;