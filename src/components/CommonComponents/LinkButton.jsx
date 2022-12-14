import classes from './LinkButton.module.scss';
import { NavLink } from "react-router-dom";
import Button from "@mui/material/Button";

const LinkButton = props => (
    <NavLink className={classes.link} to={ props.to }>
        <Button className={classes.button} variant="contained">{ props.inscription }</Button>
    </NavLink>
);
export default LinkButton;