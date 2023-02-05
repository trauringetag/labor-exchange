import classes from './Layout.module.scss';
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { Fade } from "react-awesome-reveal";
import { Outlet } from "react-router-dom";
import { BackToTopButton } from "../components/CommonComponents/BackToTopButton";

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