import classes from './AdditionalInformation.module.scss';
import { FC } from "react";

const AdditionalInformation: FC = (): JSX.Element => (
    <aside className={classes.wrapper}>
        <h2 className={classes.title}>Дополнительные сведения</h2>
        <p className={classes.text}>19 апреля 1991 года был принят Федеральный закон «О занятости населения в Российской Федерации». Именно этот день принято считать датой образования службы занятости населения России, которая осуществляет государственную политику содействия занятости населения, а также гарантии государства по реализации конституционных прав граждан Российской Федерации на труд и социальную защиту от безработицы.</p>
    </aside>
);
export default AdditionalInformation;