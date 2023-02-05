import classes from './PageNotFound.module.scss';
import { NotFoundCover } from "../../components/CommonComponents/NotFoundCover/NotFoundCover";
import LinkButton from "../../components/CommonComponents/LinkButton";
import { Fade } from "react-awesome-reveal";

const PageNotFound = () => (
    <section className={classes.wrapper}>
        <NotFoundCover />
        <h2 className={classes.title}>Кажется что-то пошло не так!</h2>
        <p className={classes.description}>Страница, которую вы запрашиваете, не существует. Возможно она устарела, была удалена, или был введён неверный адрес в адресной строке.</p>
        <Fade triggerOnce>
            <LinkButton to={'/'} inscription={'На главную'} />
        </Fade>
    </section>
);
export default PageNotFound;