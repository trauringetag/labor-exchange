import classes from './Layout.module.scss';
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import { Fade } from "react-awesome-reveal";
import { Outlet } from "react-router-dom";

const Layout = () => (
    <div className={classes.wrapper}>
        <Header />
        <Fade className={classes.content} triggerOnce>
            <Outlet />
        </Fade>
        <Footer />
    </div>
);
export default Layout;