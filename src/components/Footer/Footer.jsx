import classes from './Footer.module.scss';
import { Fade } from "react-awesome-reveal";
import Grid from "./Grid/Grid";
import AdditionalInformation from "./AdditionalInformation/AdditionalInformation";

const Footer = () => (
    <Fade className={classes.wrapper} triggerOnce>
        <footer className={classes.container}>
            <Grid />
            <AdditionalInformation />
            <p className={classes.copyright}>2023 &copy; Официальный сайт Центра занятости населения</p>
        </footer>
    </Fade>
);
export default Footer;