import classes from './About.module.scss';
import GoogleMaps from "./GoogleMaps/GoogleMaps";
import WorkingMode from "./WorkingMode/WorkingMode";
import Information from "./Information/Information";
import AccordionServices from "./AccordionServices/AccordionServices";

const About = () => (
    <div className={classes.wrapper}>
        <h2 className={classes.title}>Областное казённое учреждение Центр занятости населения города Карталы</h2>
        <hr className={classes.underlining} />
        <Information />
        <WorkingMode />
        <AccordionServices />
        <GoogleMaps />
    </div>
);
export default About;