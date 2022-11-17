import classes from './Services.module.scss';
import { NavLink } from "react-router-dom";
import Search from "./Icons/search.svg";
import Worker from "./Icons/worker.svg";
import Chart from "./Icons/chart.svg";
import Purse from "./Icons/purse.svg";
import More from "./Icons/more.svg";
import { Slide } from "react-awesome-reveal";

const Services = () => (
    <section className={classes.services}>
        <h2 className={classes.title}>Учреждение предоставляет следующие госудаственные услуги</h2>
        <hr/>
        <Slide>
            <div className={classes.container}>
                <NavLink to={'/about'} className={classes.item}>
                    <img className={classes.icon} src={Search} alt={'Иконка'} />
                    <h3>По содействию гражданам в поиске подходящей работы</h3>
                </NavLink>
                <NavLink to={'/about'} className={classes.item}>
                    <img className={classes.icon} src={Worker} alt={'Иконка'} />
                    <h3>Работодателям в подборе необходимых работников</h3>
                </NavLink>
                <NavLink to={'/about'} className={classes.item}>
                    <img className={classes.icon} src={Chart} alt={'Иконка'} />
                    <h3>По информированию о положении на рынке труда</h3>
                </NavLink>
                <NavLink to={'/about'} className={classes.item}>
                    <img className={classes.icon} src={Purse} alt={'Иконка'} />
                    <h3>По осуществлению выплат безработным гражданам</h3>
                </NavLink>
                <NavLink to={'/about'} className={`${classes.item} ${classes.link}`}>
                    <img className={classes.icon} src={More} alt={'Иконка'} />
                    <h3>Узнать подробнее...</h3>
                </NavLink>
            </div>
        </Slide>
    </section>
);
export default Services;