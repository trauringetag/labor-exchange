import classes from './Header.module.scss';
import Navbar from "./Navbar/Navbar";
import Breadcrumbs from "./Breadcrumbs/Breadcrumbs";
import { BasicServicesContainer } from "./BasicServices/BasicServicesContainer";
import { Fade } from "react-awesome-reveal";

const Header = () => (
    <header className={classes.wrapper}>
        <Navbar />
        <Fade triggerOnce>
            <section className={classes.container}>
                <Breadcrumbs separator={'<'} />
                <BasicServicesContainer />
            </section>
        </Fade>
    </header>
);
export default Header;