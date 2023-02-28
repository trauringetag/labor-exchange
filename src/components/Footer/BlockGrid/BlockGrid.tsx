import classes from './BlockGrid.module.scss';
import Logo from "../../CommonComponents/Logo/Logo";
import Contacts from "./Contacts/Contacts";
import LinksTabs from "./LinksTabs/LinksTabs";
import Search from "../../Search/Search";
import { FC } from "react";

const BlockGrid: FC = (): JSX.Element => (
    <section className={classes.wrapper}>
        <Logo />
        <Search />
        <Contacts />
        <LinksTabs />
    </section>
);
export default BlockGrid;