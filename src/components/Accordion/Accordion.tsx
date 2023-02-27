import classes from './Accordion.module.scss';
import Element from "./Element/Element";
import { useSelector } from 'react-redux';
import { RootState } from "../../store/store";
import { FC } from "react";

const Accordion: FC = (): JSX.Element => {
    const services = useSelector((state: RootState) => state.aboutPage.services);

    const displayAccordionServices = services.map(item =>
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