import GoogleMaps from "../../components/GoogleMaps/GoogleMaps";
import WorkingMode from "../../components/WorkingMode/WorkingMode";
import Information from "../../components/Information/Information";
import AccordionServices from "../../components/AccordionServices/AccordionServices";
import PageTitle from "../../components/CommonComponents/PageTitle/PageTitle";

const About = () => (
    <PageTitle title={'ОКУ ЦЗН г. Карталы'}>
        <Information />
        <WorkingMode />
        <AccordionServices />
        <GoogleMaps />
    </PageTitle>
);
export default About;