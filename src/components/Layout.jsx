import classes from './Layout.module.scss';
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import { Fade } from "react-awesome-reveal";
import { Outlet } from "react-router-dom";
import { BackToTopButton } from "./CommonComponents/BackToTopButton";

const Layout = () => (
    <div className={classes.wrapper} id={'anchor'}>
        <Header />
        <Fade className={classes.content} triggerOnce>
            <Outlet />
        </Fade>
        <Footer />
        <BackToTopButton />
    </div>
);
export default Layout;