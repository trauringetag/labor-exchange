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
        <section className={classes.container}>
            <NavLink to={'/about'} className={classes.item}>
                <img className={classes.icon} src={ Search } alt={'Иконка'} />
                <h3>По содействию гражданам в поиске подходящей работы</h3>
            </NavLink>
            <NavLink to={'/about'} className={classes.item}>
                <img className={classes.icon} src={ Worker } alt={'Иконка'} />
                <h3>Работодателям в подборе необходимых работников</h3>
            </NavLink>
            <NavLink to={'/about'} className={classes.item}>
                <img className={classes.icon} src={ Chart } alt={'Иконка'} />
                <h3>По информированию о положении на рынке труда</h3>
            </NavLink>
            <NavLink to={'/about'} className={classes.item}>
                <img className={classes.icon} src={ Purse } alt={'Иконка'} />
                <h3>По осуществлению выплат безработным гражданам</h3>
            </NavLink>
            <NavLink to={'/about'} className={`${classes.item} ${classes.last}`}>
                <img className={classes.icon} src={ More } alt={'Иконка'} />
                <h3>Узнать подробнее...</h3>
            </NavLink>
        </section>
    </Slide>
);
export default Services;