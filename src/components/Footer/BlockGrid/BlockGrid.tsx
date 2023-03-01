import classes from './BlockGrid.module.scss';
import Logo from "../../CommonComponents/Logo/Logo";
import Contacts from "./Contacts/Contacts";
import LinksTabs from "./LinksTabs/LinksTabs";
import SearchField from "../../SearchField/SearchField";
import { FC } from "react";

const BlockGrid: FC = (): JSX.Element => (
    <section className={classes.wrapper}>
        <Logo />
        <SearchField />
        <Contacts />
        <LinksTabs />
    </section>
);
export default BlockGrid;