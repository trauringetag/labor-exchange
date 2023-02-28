import classes from './Wrapper.module.scss';
import { FC, ReactNode } from "react";

interface IWrapper {
    children?: ReactNode;
    title?: string;
}

const Wrapper: FC<IWrapper> = ({ children, title }): JSX.Element => (
    <section className={classes.container}>
        <h2 className={classes.title}>{ title }</h2>
        <hr className={classes.underlining} />
        { children }
    </section>
);
export default Wrapper;