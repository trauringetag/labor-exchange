import classes from './Services.module.scss';
import { NavLink } from "react-router-dom";
import Search from "../../assets/icons/search.svg";
import Worker from "../../assets/icons/worker.svg";
import Chart from "../../assets/icons/chart.svg";
import Purse from "../../assets/icons/purse.svg";
import More from "../../assets/icons/more.svg";
import { Slide } from "react-awesome-reveal";

const Services = () => (
    <Slide triggerOnce>
        <nav className={classes.wrapper}>
            <NavLink to={'/about'} className={classes.item}>
                <img className={classes.icon} src={ Search } alt={'Иконка'} />
                <span>По содействию гражданам в поиске подходящей работы</span>
            </NavLink>
            <NavLink to={'/about'} className={classes.item}>
                <img className={classes.icon} src={ Worker } alt={'Иконка'} />
                <span>Работодателям в подборе необходимых работников</span>
            </NavLink>
            <NavLink to={'/about'} className={classes.item}>
                <img className={classes.icon} src={ Chart } alt={'Иконка'} />
                <span>По информированию о положении на рынке труда</span>
            </NavLink>
            <NavLink to={'/about'} className={classes.item}>
                <img className={classes.icon} src={ Purse } alt={'Иконка'} />
                <span>По осуществлению выплат безработным гражданам</span>
            </NavLink>
            <NavLink to={'/about'} className={`${classes.item} ${classes.last}`}>
                <img className={classes.icon} src={ More } alt={'Иконка'} />
                <span>Узнать подробнее...</span>
            </NavLink>
        </nav>
    </Slide>
);
export default Services;