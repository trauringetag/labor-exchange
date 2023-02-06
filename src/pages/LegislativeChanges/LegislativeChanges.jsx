import classes from './LegislativeChanges.module.scss';
import PageTitle from "../../components/CommonComponents/PageTitle/PageTitle";
import { Link } from "react-router-dom";

const LegislativeChanges = () => (
    <PageTitle title={'Изменения в законодательстве о занятости населения (с 01.01.2019г.)'}>
        <article className={classes.article}>
            <p>Информация составлена на основе системы КонсультантПлюс по изменениям Закона РФ от 19.04.1991 г. № 1032-1 (ред. от 03.10.2018 г.) "О занятости населения в Российской Федерации". Начало действия редакции - 01.01.2019 г.</p>
            <p>Раздел находится в разработке...</p>
            <p><a className={classes.upper} href={'http://www.consultant.ru/document/cons_doc_LAW_308156/'} target={'_blank'}>Федеральный закон</a> от 03.10.2018 г. № 350-ФЗ "О внесении изменений в отдельные законодательные акты Российской Федерации по вопросам назначения и выплаты пенсий".</p>
            <p><Link className={classes.upper} to={'/documents/legislativeChanges/Обзор изменений.doc'} target={'_blank'} download>Обзор</Link> изменений (от 03.10.2018 г. № 350-ФЗ):</p>
            <ul>
                <li>
                    <Link className={classes.link} to={'/documents/legislativeChanges/Для граждан предпенсионного возраста.doc'} target={'_blank'} download>для граждан предпенсионного возраста</Link>
                </li>
                <li>
                    <Link className={classes.link} to={'/documents/legislativeChanges/Для граждан, имеющих инвалидность.docx'} target={'_blank'} download>для граждан, имеющих инвалидность</Link>
                </li>
                <li>
                    <Link className={classes.link} to={'/documents/legislativeChanges/Досрочный выход на пенсию.doc'} target={'_blank'} download>досрочный выход на пенсию</Link>
                </li>
                <li>
                    <Link className={classes.link} to={'/documents/legislativeChanges/Подходящая работа.doc'} target={'_blank'} download>подходящая работа</Link>
                </li>
            </ul>
        </article>
    </PageTitle>
);
export default LegislativeChanges;