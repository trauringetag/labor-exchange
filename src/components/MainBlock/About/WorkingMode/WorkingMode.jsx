import classes from './WorkingMode.module.scss';

const WorkingMode = props => {
    const displayWorkingMode = props.workingMode.map( item =>
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