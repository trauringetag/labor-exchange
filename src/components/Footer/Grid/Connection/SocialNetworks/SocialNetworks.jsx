import classes from './SocialNetworks.module.scss';
import { VK } from "../../../../CommonComponents/Social/VK";
import { Telegram } from "../../../../CommonComponents/Social/Telegram";
import { WhatsApp } from "../../../../CommonComponents/Social/WhatsApp";

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