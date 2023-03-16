import { Navigate, Route, Routes } from "react-router-dom";
import PageNotFound from "./pages/PageNotFound/PageNotFound";
import Official from "./pages/Official/Official";
import About from "./pages/About/About";
import Layout from "./pages/Layout";
import Questionnaires from "./pages/Questionnaires/Questionnaires";
import Legislation from "./pages/Legislation/Legislation";
import AppealProcedure from "./pages/AppealProcedure/AppealProcedure";
import LegislativeChanges from "./pages/LegislativeChanges/LegislativeChanges";
import TemporaryEmployment from "./pages/TemporaryEmployment/TemporaryEmployment";
import ForEmployers from "./pages/ForEmployers/ForEmployers";
import Feed from "./pages/Feed/Feed";
import { FC } from "react";
import SingleArticle from "./pages/SingleArticle/SingleArticle";
import PersonalDataPolicy from "./pages/PersonalDataPolicy/PersonalDataPolicy";

const App: FC = (): JSX.Element => (
    <Routes>
        <Route path={'/'} element={<Layout />}>
            <Route index element={<Official />} />
            <Route path={'labor-exchange'} element={<Navigate to={'/'} />} />
            <Route path={'*'} element={<PageNotFound />} />
            <Route path={'about'} element={<About />} />
            <Route path={'questionnaires'} element={<Questionnaires />} />
            <Route path={'legislation'} element={<Legislation />} />
            <Route path={'legislation/appeal-procedure'} element={<AppealProcedure />} />
            <Route path={'legislation/legislative-changes'} element={<LegislativeChanges />} />
            <Route path={'temporary-employment'} element={<TemporaryEmployment />} />
            <Route path={'for-employers'} element={<ForEmployers />} />
            <Route path={'feed'} element={<Feed />} />
            <Route path={'feed/id:id'} element={<SingleArticle />} />
            <Route path={'personal-data-policy'} element={<PersonalDataPolicy />} />
        </Route>
    </Routes>
);
export default App;