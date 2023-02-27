import classes from './Search.module.scss';
import { FC } from "react";

const Search: FC = (): JSX.Element => (
    <form>
        <input className={classes.search}
               type={'search'}
               placeholder={'Поиск...'}
        />
    </form>
);
export default Search;