import classes from './Footer.module.scss';
import { Fade } from "react-awesome-reveal";
import Grid from "./Grid/Grid";
import SideInformation from "./SideInformation/SideInformation";

const Footer = () => (
    <Fade className={classes.wrapper} triggerOnce>
        <footer className={classes.container}>
            <Grid />
            <SideInformation />
            <p className={classes.copyright}>2014 &copy; Официальный сайт Центра занятости населения</p>
        </footer>
    </Fade>
);
export default Footer;