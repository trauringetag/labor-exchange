import classes from './Accordion.module.scss';
import Element from "./Element/Element";
import { useSelector } from 'react-redux';

const Accordion = () => {
    const services = useSelector(state => state.aboutPage.services);

    const displayAccordionServices = services.map( item =>
        <Element key={ item.id }
                 preview={ item.preview }
                 cabinet={ item.cabinet }
                 phone={ item.phone }
        />
    );

    return (
        <>
            <h3 className={classes.title}>ОКУ ЦЗН г. Карталы предоставляет государственные услуги</h3>
            <article className={classes.accordion}>
                { displayAccordionServices }
            </article>
        </>
    );
};
export default Accordion;