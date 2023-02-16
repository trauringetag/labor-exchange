import classes from './Grid.module.scss';
import Logo from "../../CommonComponents/Logo/Logo";
import Contacts from "./Contacts/Contacts";
import LinksTabs from "./LinksTabs/LinksTabs";
import Search from "../../Search/Search";

const Grid = () => (
    <div className={classes.wrapper}>
        <Logo />
        <Search />
        <Contacts />
        <LinksTabs />
    </div>
);
export default Grid;