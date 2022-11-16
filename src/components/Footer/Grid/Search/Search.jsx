import classes from './Search.module.scss';

const Search = () => (
    <form className={classes.form}>
        <input className={classes.input} type={'search'} placeholder={'Поиск...'} />
    </form>
);
export default Search;