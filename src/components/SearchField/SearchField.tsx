import classes from './SearchField.module.scss';
import { FC } from "react";

const SearchField: FC = (): JSX.Element => {
    return (
        <form>
            <input className={classes.search}
                   type={'search'}
                   placeholder={'Поиск...'}
            />
        </form>
    );
};
export default SearchField;