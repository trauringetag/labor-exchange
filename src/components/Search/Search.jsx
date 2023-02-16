import classes from './Search.module.scss';

const Search = () => (
    <form>
        <input className={classes.search}
               type={'search'}
               placeholder={'Поиск...'}
        />
    </form>
);
export default Search;