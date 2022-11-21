import classes from './AccordionServices.module.scss';
import AccordionItem from "./AccordionItem/AccordionItem";

const AccordionServices = props => {
    const displayAccordionServices = props.services.map( item =>
        <AccordionItem key={ item.id }
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