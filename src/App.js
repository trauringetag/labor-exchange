import { Navigate, Route, Routes } from "react-router-dom";
import PageNotFound from "./pages/PageNotFound/PageNotFound";
import Official from "./pages/Official/Official";
import About from "./pages/About/About";
import Layout from "./pages/Layout";
import Interview from "./pages/Interview/Interview";
import Legislation from "./pages/Legislation/Legislation";
import AppealProcedure from "./pages/AppealProcedure/AppealProcedure";
import LegislativeChanges from "./pages/LegislativeChanges/LegislativeChanges";

const App = () => (
    <Routes>
        <Route to={'/'} element={<Layout />}>
            <Route index element={<Official />} />
            <Route path={'labor-exchange'} element={<Navigate to={'/'} />} />
            <Route path={'*'} element={<PageNotFound />} />
            <Route path={'about'} element={<About />} />
            <Route path={'interview'} element={<Interview />} />
            <Route path={'legislation'} element={<Legislation />} />
            <Route path={'legislation/appeal-procedure'} element={<AppealProcedure />} />
            <Route path={'legislation/legislative-changes'} element={<LegislativeChanges />} />
        </Route>
    </Routes>
);
export default App;