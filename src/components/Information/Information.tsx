import classes from './Information.module.scss';
import { useSelector } from 'react-redux';
import { FC } from "react";
import { RootState } from "../../store/store";

const Information: FC = (): JSX.Element => {
    const information = useSelector((state: RootState) => state.aboutPage.information);

    return (
        <>
            <article className={classes.block}>
                <p className={classes.text}>Юридический адрес: <span>{ information.legalAddress }</span></p>
                <p className={classes.text}>Руководитель: <span>{ information.supervisor }</span></p>
                <p className={classes.text}>Бухгалтерия: <a href={`tel:${ information.accountingPhone }`}>{ information.accountingPhone }</a></p>
                <p className={classes.text}>Отдел трудоустройства: <a href={`tel:${ information.employmentDepartmentPhone }`}>{ information.employmentDepartmentPhone }</a></p>
            </article>
            <p className={classes.text}>Телефон горячей линии: <a href={`tel:${ information.hotlinePhone }`}>{ information.hotlinePhone }</a></p>
        </>
    );
};
export default Information;