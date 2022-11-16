import classes from './PageNotFound.module.scss';
import { Icons } from "./Icons/Icons";
import LinkButton from "../../CommonComponents/LinkButton";
import { Fade } from "react-awesome-reveal";

const PageNotFound = () => (
    <section className={classes.wrapper}>
        <Icons />
        <h2 className={classes.title}>Кажется что-то пошло не так! Страница, которую вы запрашиваете, не существует. Возможно она устарела, была удалена, или был введён неверный адрес в адресной строке.</h2>
        <Fade>
            <LinkButton to={'/'} inscription={'На главную'} />
        </Fade>
    </section>
);
export default PageNotFound;