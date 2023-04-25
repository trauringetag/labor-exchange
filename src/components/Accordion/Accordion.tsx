import classes from './Accordion.module.scss';
import Element from "./Element/Element";
import { RootState } from "../../store/store";
import { FC, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import axios from "axios";
import { setAllServices } from "../../store/slices/AboutSlice";

interface IServices {
    id: number,
    description: string,
    cabinet: number,
    phone: string
}

const Accordion: FC = (): JSX.Element => {
    const dispatch = useAppDispatch();

    const services = useAppSelector((state: RootState) => state.aboutPage.services);

    useEffect(() => {
        axios('http://localhost:8080/api/services').then(response => {
            dispatch(setAllServices(response.data));
        });
    }, [dispatch]);

    const displayAccordionServices = services.map((item: IServices) =>
        <Element key={ item.id }
                 preview={ item.description }
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