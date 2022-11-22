import classes from './MainBlock.module.scss';
import { Navigate, Route, Routes } from "react-router-dom";
import PageNotFound from "./PageNotFound/PageNotFound";
import { Fade } from "react-awesome-reveal";
import OfficialPage from "./OfficialPage/OfficialPage";
import About from "./About/About";

const MainBlock = () => (
    <Fade className={classes.wrapper} triggerOnce>
        <Routes>
            <Route path={'/labor-exchange'} element={<Navigate to={'/'} />} />
            <Route path={'*'} element={<PageNotFound />} />
            <Route path={'/'} element={<OfficialPage />} />
            <Route path={'/about'} element={<About />} />
        </Routes>
    </Fade>
);
export default MainBlock;