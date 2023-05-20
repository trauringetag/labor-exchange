import classes from './Layout.module.scss';
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { Fade } from "react-awesome-reveal";
import { Outlet } from "react-router-dom";
import { HeaderWidget } from "../components/CommonComponents/HeaderWidget";
import { FC } from "react";
import ModalWindow from "../components/CommonComponents/ModalWindow";
import { useAppSelector } from "../store/hooks";
import { RootState } from "../store/store";

const Layout: FC = (): JSX.Element => {
    const status = useAppSelector((state: RootState) => state.modal.status);
    const positiveDescription = useAppSelector((state: RootState) => state.modal.positiveDescription);
    const negativeDescription = useAppSelector((state: RootState) => state.modal.negativeDescription);

    return (
        <div className={classes.wrapper} id={'anchor'}>
            <Header />
            <Fade className={classes.content} triggerOnce>
                <Outlet />
            </Fade>
            <Footer />
            <HeaderWidget />
            <ModalWindow title={ status === 200 ? 'Успешно!' : 'Внимание!' }
                         description={ status === 200 ? positiveDescription : negativeDescription }
            />
        </div>
    );
};
export default Layout;