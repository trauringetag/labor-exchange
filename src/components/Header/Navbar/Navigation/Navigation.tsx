import classes from './Navigation.module.scss';
import PhoneComponent from "./PhoneComponent/PhoneComponent";
import DrawerComponent from "./DrawerComponent/DrawerComponent";
import { FC } from "react";

const Navigation: FC = (): JSX.Element => (
    <div className={classes.wrapper}>
        <PhoneComponent />
        <DrawerComponent />
    </div>
);
export default Navigation;