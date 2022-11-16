import classes from './Grid.module.scss';
import Logo from "../../CommonComponents/Logo";
import Search from "./Search/Search";
import Connection from "./Connection/Connection";
import LinksTabs from "./LinksTabs/LinksTabs";

const Grid = () => (
    <div className={classes.wrapper}>
        <Logo />
        <Search />
        <Connection />
        <LinksTabs />
    </div>
);
export default Grid;