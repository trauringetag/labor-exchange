import classes from './BlockGrid.module.scss';
import Logo from "../../CommonComponents/Logo/Logo";
import Contacts from "./Contacts/Contacts";
import LinksTabs from "./LinksTabs/LinksTabs";
import Search from "../../Search/Search";

const BlockGrid = () => (
    <section className={classes.wrapper}>
        <Logo />
        <Search />
        <Contacts />
        <LinksTabs />
    </section>
);
export default BlockGrid;