import classes from './Logo.module.scss';
import { NavLink } from "react-router-dom";
import LogoIcon from "./logo.svg";

const Logo = () => (
    <NavLink to={'/'} className={classes.link}>
        <img className={classes.icon}
             src={LogoIcon}
             alt={'Логотип'}
        />
        <h2 className={classes.title}>Биржа труда</h2>
    </NavLink>
);
export default Logo;