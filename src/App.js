import { Navigate, Route, Routes } from "react-router-dom";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import Official from "./components/Official/Official";
import About from "./components/About/About";
import Layout from "./components/Layout";

const App = () => (
    <Routes>
        <Route to={'/'} element={<Layout />}>
            <Route index element={<Official />} />
            <Route path={'labor-exchange'} element={<Navigate to={'/'} />} />
            <Route path={'*'} element={<PageNotFound />} />
            <Route path={'about'} element={<About />} />
        </Route>
    </Routes>
);
export default App;