import classes from './Navigation.module.scss';
import PhoneComponent from "./PhoneComponent/PhoneComponent";
import DrawerComponent from "./DrawerComponent/DrawerComponent";

const Navigation = () => (
    <div className={classes.wrapper}>
        <PhoneComponent />
        <DrawerComponent />
    </div>
);
export default Navigation;