import classes from './Navigation.module.scss';
import PhoneComponent from "./PhoneComponent/PhoneComponent";
import SwipeableTemporaryDrawer from "./SwipeableTemporaryDrawer/SwipeableTemporaryDrawer";
import { FC } from "react";

const Navigation: FC = (): JSX.Element => (
    <div className={classes.wrapper}>
        <PhoneComponent />
        <SwipeableTemporaryDrawer />
    </div>
);
export default Navigation;