import GoogleMaps from "../../components/GoogleMaps/GoogleMaps";
import WorkingMode from "../../components/WorkingMode/WorkingMode";
import Information from "../../components/Information/Information";
import Accordion from "../../components/Accordion/Accordion";
import Wrapper from "../../components/CommonComponents/Wrapper/Wrapper";

const About = () => (
    <Wrapper title={'ОКУ ЦЗН г. Карталы'}>
        <Information />
        <WorkingMode />
        <Accordion />
        <GoogleMaps />
    </Wrapper>
);
export default About;