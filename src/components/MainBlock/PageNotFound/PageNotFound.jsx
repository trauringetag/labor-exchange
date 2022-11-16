import classes from './PageNotFound.module.scss';
import { Icons } from "./Icons/Icons";
import LinkButton from "../../CommonComponents/LinkButton";

const PageNotFound = () => (
    <section className={classes.wrapper}>
        <Icons />
        <h2 className={classes.title}>Кажется что-то пошло не так! Страница, которую вы запрашиваете, не существует. Возможно она устарела, была удалена, или был введён неверный адрес в адресной строке.</h2>
        <LinkButton to={'/'} inscription={'На главную'} />
    </section>
);
export default PageNotFound;