import classes from './Header.module.scss';
import Navbar from "./Navbar/Navbar";
import Breadcrumbs from "./Breadcrumbs/Breadcrumbs";
import { Fade } from "react-awesome-reveal";
import BasicServices from "./BasicServices/BasicServices";
import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

const Header = () => {
    const ref = useRef(null);
    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, ref.current.clientHeight - 50);
    }, [location]);

    return (
        <header className={classes.wrapper} ref={ref}>
            <Navbar />
            <Fade triggerOnce>
                <section className={classes.container}>
                    <Breadcrumbs separator={'<'} />
                    <BasicServices />
                </section>
            </Fade>
        </header>
    );
};
export default Header;