import classes from './AdminPanel.module.scss';
import { FC } from "react";
import AddSituation from "../../components/PrivateAdminActions/AddSituation";
import AddArticle from "../../components/PrivateAdminActions/AddArticle";
import StatementTable from "../../components/PrivateAdminActions/StatementTable";

const AdminPanel: FC = (): JSX.Element => {
    return (
        <>
            <section className={classes.wrapper}>
                <h1 className={classes.title}>Панель администратора</h1>
                <AddSituation />
                <AddArticle />
                <hr className={classes.underlining} />
            </section>
            <StatementTable />
        </>
    );
};
export default AdminPanel;