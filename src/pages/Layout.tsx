import classes from './Layout.module.scss';
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { Fade } from "react-awesome-reveal";
import { Outlet } from "react-router-dom";
import { HeaderWidget } from "../components/CommonComponents/HeaderWidget";
import { FC } from "react";

const Layout: FC = (): JSX.Element => (
    <div className={classes.wrapper} id={'anchor'}>
        <Header />
        <Fade className={classes.content} triggerOnce>
            <Outlet />
        </Fade>
        <Footer />
        <HeaderWidget />
    </div>
);
export default Layout;