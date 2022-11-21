import classes from './About.module.scss';
import { AccordionServicesContainer } from "./AccordionServices/AccordionServicesContainer";
import { WorkingModeContainer } from "./WorkingMode/WorkingModeContainer";
import { InformationContainer } from "./Information/InformationContainer";
import GoogleMaps from "./GoogleMaps/GoogleMaps";

const About = () => (
    <div className={classes.wrapper}>
        <h2 className={classes.title}>Областное казённое учреждение Центр занятости населения города Карталы</h2>
        <hr/>
        <InformationContainer />
        <WorkingModeContainer />
        <AccordionServicesContainer />
        <GoogleMaps />
    </div>
);
export default About;