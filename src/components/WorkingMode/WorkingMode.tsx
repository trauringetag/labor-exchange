import classes from './WorkingMode.module.scss';
import { FC, useEffect } from "react";
import { RootState } from "../../store/store";
import axios from "axios";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { setAllWorkingMode } from "../../store/slices/AboutSlice";

interface IWorkingMode {
    id: number,
    day: string,
    opening_hours: string
}

const WorkingMode: FC = (): JSX.Element => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        axios.get('http://localhost:8080/api/working_mode').then(response => {
            dispatch(setAllWorkingMode(response.data));
        });
    }, [dispatch]);

    const workingMode = useAppSelector((state: RootState) => state.aboutPage.workingMode);

    const displayWorkingMode = workingMode.map((item: IWorkingMode) =>
        <tr key={ item.id }>
            <td>{ item.day }</td>
            <td>{ item.opening_hours }</td>
        </tr>
    );

    return (
        <table className={classes.table}>
            <thead>
                <tr>
                    <th colSpan={2}>Режим работы</th>
                </tr>
            </thead>
            <tbody>
                { displayWorkingMode }
            </tbody>
        </table>
    );
};
export default WorkingMode;