import classes from './Wrapper.module.scss';

const Wrapper = ({ children, title }) => (
    <section className={classes.wrapper}>
        <h2 className={classes.title}>{ title }</h2>
        <hr className={classes.underlining} />
        { children }
    </section>
);
export default Wrapper;