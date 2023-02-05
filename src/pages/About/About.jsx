import classes from './About.module.scss';
import GoogleMaps from "../../components/GoogleMaps/GoogleMaps";
import WorkingMode from "../../components/WorkingMode/WorkingMode";
import Information from "../../components/Information/Information";
import AccordionServices from "../../components/AccordionServices/AccordionServices";

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