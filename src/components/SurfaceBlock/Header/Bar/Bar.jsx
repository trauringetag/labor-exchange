import classes from './Bar.module.scss';
import PhoneComponent from "./PhoneComponent/PhoneComponent";
import DrawerComponent from "./DrawerComponent/DrawerComponent";

const Bar = () => (
    <div className={classes.bar}>
        <PhoneComponent />
        <DrawerComponent />
    </div>
);
export default Bar;