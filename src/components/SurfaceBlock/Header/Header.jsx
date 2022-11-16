import classes from './Header.module.scss';
import Logo from "../../CommonComponents/Logo";
import Bar from "./Bar/Bar";
import { Fade } from "react-awesome-reveal";

const Header = () => (
    <div className={classes.wrapper}>
        <Fade>
            <header className={classes.header}>
                <Logo />
                <Bar />
            </header>
        </Fade>
    </div>
);
export default Header;