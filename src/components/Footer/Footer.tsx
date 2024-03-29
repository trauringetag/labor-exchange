import classes from './Footer.module.scss';
import { Fade } from "react-awesome-reveal";
import BlockGrid from "./BlockGrid/BlockGrid";
import AdditionalInformation from "./AdditionalInformation/AdditionalInformation";
import { FC } from "react";

const Footer: FC = (): JSX.Element => (
    <Fade className={classes.wrapper} triggerOnce>
        <footer className={classes.container}>
            <BlockGrid />
            <AdditionalInformation />
            <p className={classes.copyright}>2023 &copy; Официальный сайт Центра занятости населения</p>
        </footer>
    </Fade>
);
export default Footer;