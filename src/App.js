import { Navigate, Route, Routes } from "react-router-dom";
import PageNotFound from "./pages/PageNotFound/PageNotFound";
import Official from "./pages/Official/Official";
import About from "./pages/About/About";
import Layout from "./pages/Layout";
import Interview from "./pages/Interview/Interview";

const App = () => (
    <Routes>
        <Route to={'/'} element={<Layout />}>
            <Route index element={<Official />} />
            <Route path={'labor-exchange'} element={<Navigate to={'/'} />} />
            <Route path={'*'} element={<PageNotFound />} />
            <Route path={'about'} element={<About />} />
            <Route path={'interview'} element={<Interview />} />
        </Route>
    </Routes>
);
export default App;