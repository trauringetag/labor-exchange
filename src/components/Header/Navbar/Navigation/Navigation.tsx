import classes from './Navigation.module.scss';
import PhoneComponent from "./PhoneComponent/PhoneComponent";
import { FC } from "react";
import SwipeableTemporaryDrawer from "./SwipeableTemporaryDrawer/SwipeableTemporaryDrawer";

const Navigation: FC = (): JSX.Element => (
    <div className={classes.wrapper}>
        <PhoneComponent />
        <SwipeableTemporaryDrawer />
    </div>
);
export default Navigation;