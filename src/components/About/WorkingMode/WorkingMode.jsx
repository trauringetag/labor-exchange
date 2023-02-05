import classes from './WorkingMode.module.scss';
import { useSelector } from 'react-redux';

const WorkingMode = () => {
    const workingMode = useSelector(state => state.aboutPage.workingMode);

    const displayWorkingMode = workingMode.map( item =>
        <tr key={ item.id }>
            <td>{ item.leftColumn }</td>
            <td>{ item.rightColumn }</td>
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