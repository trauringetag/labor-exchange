import classes from './Navbar.module.scss';
import Logo from "../../CommonComponents/Logo/Logo";
import Navigation from "./Navigation/Navigation";
import { Fade } from "react-awesome-reveal";

const Navbar = () => (
    <Fade className={classes.wrapper} triggerOnce>
        <nav className={classes.navigation}>
            <Logo />
            <Navigation />
        </nav>
    </Fade>
);
export default Navbar;