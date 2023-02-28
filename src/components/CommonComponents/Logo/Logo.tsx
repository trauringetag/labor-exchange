import classes from './Logo.module.scss';
import { NavLink } from "react-router-dom";
import LogoIcon from "../../../assets/logo.svg";
import { FC } from "react";

const Logo: FC = (): JSX.Element => (
    <NavLink to={'/'} className={classes.link}>
        <img className={classes.icon}
             src={ LogoIcon }
             alt={'Логотип'}
        />
        <span className={classes.name}>ОКУ ЦЗН г. Карталы</span>
    </NavLink>
);
export default Logo;