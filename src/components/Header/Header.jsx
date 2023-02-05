import classes from './Header.module.scss';
import Navbar from "./Navbar/Navbar";
import Breadcrumbs from "./Breadcrumbs/Breadcrumbs";
import { Fade } from "react-awesome-reveal";
import BasicServices from "./BasicServices/BasicServices";

const Header = () => (
    <header className={classes.wrapper}>
        <Navbar />
        <Fade triggerOnce>
            <section className={classes.container}>
                <Breadcrumbs separator={'<'} />
                <BasicServices />
            </section>
        </Fade>
    </header>
);
export default Header;