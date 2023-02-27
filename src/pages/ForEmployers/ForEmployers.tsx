import classes from './ForEmployers.module.scss';
import Wrapper from "../../components/CommonComponents/Wrapper/Wrapper";
import { Link } from "react-router-dom";
import ResponsibilitiesFile from '../../assets/documents/employers/responsibilities.docx';
import RecruitmentFile from '../../assets/documents/employers/recruitment.docx';
import JobFairFile from '../../assets/documents/employers/job-fair.docx';
import ForeignWorkersFile from '../../assets/documents/employers/foreign-workers.docx';
import PublicWorksFile from '../../assets/documents/employers/public-works.docx';
import HandicappedControlFile from '../../assets/documents/employers/handicapped-control.docx';
import ForeignLaborForceFile from '../../assets/documents/employers/foreign-labor-force.docx';
import { FC } from "react";

const ForEmployers: FC = (): JSX.Element => (
    <Wrapper title={'Работодателям'}>
        <ul className={classes.list}>
            <li>
                <Link className={classes.link}
                      to={ResponsibilitiesFile}
                      target={'_blank'}
                      download={'Права и обязанности'}
                >
                    Права и обязанности
                </Link>
            </li>
            <li>
                <Link className={classes.link}
                      to={RecruitmentFile}
                      target={'_blank'}
                      download={'Подбор персонала'}
                >
                    Подбор персонала
                </Link>
            </li>
            <li>
                <Link className={classes.link}
                      to={JobFairFile}
                      target={'_blank'}
                      download={'Работодателю о ярмарках вакансий'}
                >
                    Работодателю о ярмарках вакансий
                </Link>
            </li>
            <li>
                <Link className={classes.link}
                      to={ForeignWorkersFile}
                      target={'_blank'}
                      download={'Работодателю, привлекающему иностранную рабочую силу'}
                >
                    Работодателю, привлекающему иностранную рабочую силу
                </Link>
            </li>
            <li>
                <Link className={classes.link}
                      to={PublicWorksFile}
                      target={'_blank'}
                      download={'Общественные работы'}
                >
                    Общественные работы
                </Link>
            </li>
            <li>
                <Link className={classes.link}
                      to={HandicappedControlFile}
                      target={'_blank'}
                      download={'Контроль за приёмом на работу инвалидов в пределах установленной квоты'}
                >
                    Контроль за приёмом на работу инвалидов в пределах установленной квоты
                </Link>
            </li>
            <li>
                <Link className={classes.link}
                      to={ForeignLaborForceFile}
                      target={'_blank'}
                      download={'Соглашение об организованном наборе и привлечении граждан Республики Узбекистан для осуществления временной трудовой деятельности на территории Российской Федерации'}
                >
                    Соглашение об организованном наборе и привлечении граждан Республики Узбекистан для осуществления временной трудовой деятельности на территории Российской Федерации
                </Link>
            </li>
        </ul>
    </Wrapper>
);
export default ForEmployers;