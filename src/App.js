import { Navigate, Route, Routes } from "react-router-dom";
import PageNotFound from "./components/MainBlock/PageNotFound/PageNotFound";
import OfficialPage from "./components/MainBlock/OfficialPage/OfficialPage";
import About from "./components/MainBlock/About/About";
import Layout from "./components/Layout";

const App = () => (
    <Routes>
        <Route to={'/'} element={<Layout />}>
            <Route index element={<OfficialPage />} />
            <Route path={'labor-exchange'} element={<Navigate to={'/'} />} />
            <Route path={'*'} element={<PageNotFound />} />
            <Route path={'about'} element={<About />} />
        </Route>
    </Routes>
);
export default App;