import classes from './StatementTable.module.scss';
import { FC, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { RootState } from "../../store/store";
import axios from "axios";
import { setStatements } from "../../store/slices/StatementListSlice";

interface IStatementTable {
    id: number,
    full_name: string,
    email: string,
    address: string,
    phone: string,
    category: string,
    social_status: string,
    text_appeal: string
}

const StatementTable: FC = (): JSX.Element => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        axios.get('http://localhost:8080/api/reception').then(response => {
            dispatch(setStatements(response.data));
        });
    }, [dispatch]);

    const statements = useAppSelector((state: RootState) => state.statementList.statements);

    const displayStatements = statements.map((item: IStatementTable) =>
        <tr key={ item.id }>
            <td>{ item.full_name }</td>
            <td>{ item.email }</td>
            <td>{ item.address }</td>
            <td>{ item.phone }</td>
            <td>{ item.category }</td>
            <td>{ item.social_status }</td>
            <td>{ item.text_appeal }</td>
        </tr>
    );

    return (
        <table className={classes.table}>
            <thead>
            <tr>
                <th colSpan={7}>Список обращений</th>
            </tr>
            <tr>
                <td>ФИО</td>
                <td>Почта</td>
                <td>Адрес</td>
                <td>Телефон</td>
                <td>Категория</td>
                <td>Социальный статус</td>
                <td>Текст обращения</td>
            </tr>
            </thead>
            <tbody>
                { displayStatements }
            </tbody>
        </table>
    );
};
export default StatementTable;