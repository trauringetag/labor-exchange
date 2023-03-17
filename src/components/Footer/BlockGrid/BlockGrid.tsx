import classes from './BlockGrid.module.scss';
import Logo from "../../CommonComponents/Logo/Logo";
import Contacts from "./Contacts/Contacts";
import LinksTabs from "./LinksTabs/LinksTabs";
import { FC } from "react";
import Mailing from "./Mailing/Mailing";

const BlockGrid: FC = (): JSX.Element => (
    <section className={classes.wrapper}>
        <Logo />
        <Mailing />
        <Contacts />
        <LinksTabs />
    </section>
);
export default BlockGrid;