import classes from './MainBlock.module.scss';
import { Route, Routes } from "react-router-dom";
import PageNotFound from "./PageNotFound/PageNotFound";

const MainBlock = () => (
    <main className={classes.wrapper}>
        <Routes>
            <Route path={'*'} element={<PageNotFound />} />
        </Routes>
    </main>
);
export default MainBlock;