import classes from './Services.module.scss';
import { NavLink } from "react-router-dom";
import Search from "../../../../assets/ServicesIcons/search.svg";
import Worker from "../../../../assets/ServicesIcons/worker.svg";
import Chart from "../../../../assets/ServicesIcons/chart.svg";
import Purse from "../../../../assets/ServicesIcons/purse.svg";
import { More } from "../../../CommonComponents/SVG/More";
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
                    <More />
                    <h3>Узнать подробнее...</h3>
                </NavLink>
            </div>
        </Slide>
    </section>
);
export default Services;