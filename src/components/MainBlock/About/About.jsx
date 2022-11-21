import classes from './About.module.scss';
import Information from "./Information/Information";
import { AccordionServicesContainer } from "./AccordionServices/AccordionServicesContainer";
import { WorkingModeContainer } from "./WorkingMode/WorkingModeContainer";

const About = () => (
    <div className={classes.wrapper}>
        <h2 className={classes.title}>Областное казённое учреждение Центр занятости населения города Карталы</h2>
        <hr/>
        <Information />
        <WorkingModeContainer />
        <AccordionServicesContainer />
    </div>
);
export default About;