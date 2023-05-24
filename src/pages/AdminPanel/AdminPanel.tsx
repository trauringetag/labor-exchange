import classes from './AdminPanel.module.scss';
import { FC, useEffect } from "react";
import AddSituation from "../../components/PrivateAdminActions/AddSituation";
import AddArticle from "../../components/PrivateAdminActions/AddArticle";
import Appeal from "../../components/PrivateAdminActions/Appeal/Appeal";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import axios from "axios";
import { setStatements } from "../../store/slices/StatementListSlice";
import { RootState } from "../../store/store";

interface IAdminPanel {
    id: number,
    full_name: string,
    email: string,
    address: string,
    phone: string,
    category: string,
    social_status: string,
    text_appeal: string,
    createdAt: string
}

const AdminPanel: FC = (): JSX.Element => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        axios.get('http://localhost:8080/api/reception').then(response => {
            dispatch(setStatements(response.data));
        });
    }, [dispatch]);

    const statements = useAppSelector((state: RootState) => state.statementList.statements);

    const displayStatements = statements.filter((item: any) => !item.processed).map((item: IAdminPanel) =>
        <Appeal key={item.id} { ...item }/>
    );

    return (
        <>
            <section className={`${classes.wrapper} ${classes.addendum}`}>
                <h1 className={classes.title}>Панель администратора</h1>
                <AddSituation />
                <AddArticle />
            </section>
            <hr className={classes.underlining} />
            <section className={classes.wrapper}>
                <h2 className={`${classes.title} ${classes.subtitle}`}>Список обращений</h2>
                {
                    displayStatements.length === 0 ?
                        <p className={classes.empty}>На данный момент обращения отсутствуют.</p> :
                        displayStatements
                }
            </section>
        </>
    );
};
export default AdminPanel;