import classes from './LegislativeChanges.module.scss';
import PageTitle from "../../components/CommonComponents/PageTitle/PageTitle";
import { Link } from "react-router-dom";
import EarlyRetirementFile from '../../assets/documents/regulations/early-retirement.doc';
import ForInvalidsFile from '../../assets/documents/regulations/for-invalids.docx';
import ForPrePensionersFile from '../../assets/documents/regulations/for-pre-pensioners.doc';
import ReviewChangesFile from '../../assets/documents/regulations/review-changes.doc';
import SuitableJobFile from '../../assets/documents/regulations/suitable-job.doc';

const LegislativeChanges = () => (
    <PageTitle title={'Изменения в законодательстве о занятости населения (с 01.01.2019г.)'}>
        <article className={classes.article}>
            <p>Информация составлена на основе системы КонсультантПлюс по изменениям Закона РФ от 19.04.1991 г. № 1032-1 (ред. от 03.10.2018 г.) "О занятости населения в Российской Федерации". Начало действия редакции - 01.01.2019 г.</p>
            <p>Раздел находится в разработке...</p>
            <p><a className={classes.upper} href={'http://www.consultant.ru/document/cons_doc_LAW_308156/'} target={'_blank'}>Федеральный закон</a> от 03.10.2018 г. № 350-ФЗ "О внесении изменений в отдельные законодательные акты Российской Федерации по вопросам назначения и выплаты пенсий".</p>
            <p><Link className={classes.upper} to={ReviewChangesFile} target={'_blank'} download={'Обзор изменений'}>Обзор</Link> изменений (от 03.10.2018 г. № 350-ФЗ):</p>
            <ul>
                <li>
                    <Link className={classes.link} to={ForPrePensionersFile} target={'_blank'} download={'Для граждан предпенсионного возраста'}>для граждан предпенсионного возраста</Link>
                </li>
                <li>
                    <Link className={classes.link} to={ForInvalidsFile} target={'_blank'} download={'Для граждан, имеющих инвалидность'}>для граждан, имеющих инвалидность</Link>
                </li>
                <li>
                    <Link className={classes.link} to={EarlyRetirementFile} target={'_blank'} download={'Досрочный выход на пенсию'}>досрочный выход на пенсию</Link>
                </li>
                <li>
                    <Link className={classes.link} to={SuitableJobFile} target={'_blank'} download={'Подходящая работа'}>подходящая работа</Link>
                </li>
            </ul>
        </article>
    </PageTitle>
);
export default LegislativeChanges;