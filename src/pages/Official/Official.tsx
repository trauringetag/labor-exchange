import classes from './Official.module.scss';
import Services from "../../components/Services/Services";
import Wrapper from "../../components/CommonComponents/Wrapper/Wrapper";
import { FC } from "react";
import Segue from "../../components/CommonComponents/Segue";
import LaborMarketImage from '../../assets/labor-market.svg';

const Official: FC = (): JSX.Element => (
    <Wrapper title={'Главная страница'}>
        <Services />
        <section className={classes.labor}>
            <div className={classes.wrapper}>
                <h3 className={classes.title}>Ситуация на рынке труда</h3>
                <p className={classes.information}>Государственную услугу предоставляет Областное казённое учреждение Центр занятости населения города Карталы. Каждый день происходит динамика роста и спада безработицы, количества вакансий, учёта граждан на бирже труда.</p>
                <Segue to={'/situation-labor-market'} inscription={'Подробнее'} />
            </div>
            <img className={classes.image} src={ LaborMarketImage } alt="Изображение" />
        </section>
    </Wrapper>
);
export default Official;