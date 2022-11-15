import classes from './Header.module.scss';
import Logo from "./Logo/Logo";
import Bar from "./Bar/Bar";

const Header = () => (
    <div className={classes.wrapper}>
        <header className={classes.header}>
            <Logo />
            <Bar />
        </header>
    </div>
);
export default Header;