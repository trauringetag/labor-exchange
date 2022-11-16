import classes from './MainBlock.module.scss';
import { Route, Routes } from "react-router-dom";
import PageNotFound from "./PageNotFound/PageNotFound";
import { Fade } from "react-awesome-reveal";

const MainBlock = () => (
    <Fade className={classes.wrapper}>
        <Routes>
            <Route path={'*'} element={<PageNotFound />} />
        </Routes>
    </Fade>
);
export default MainBlock;