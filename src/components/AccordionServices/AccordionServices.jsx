import classes from './AccordionServices.module.scss';
import Element from "./Element/Element";
import { useSelector } from 'react-redux';

const AccordionServices = () => {
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
            <section className={classes.accordion}>
                { displayAccordionServices }
            </section>
        </>
    );
};
export default AccordionServices;