import classes from './SocialNetworks.module.scss';
import { VK } from "./Icons/VK";
import { Telegram } from "./Icons/Telegram";
import { WhatsApp } from "./Icons/WhatsApp";

const SocialNetworks = () => (
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
);
export default SocialNetworks;