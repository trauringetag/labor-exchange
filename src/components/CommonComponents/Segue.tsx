import classes from './Segue.module.scss';
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import { FC } from "react";

interface ISegue {
    to: string;
    inscription?: string;
}

const Segue: FC<ISegue> = ({ ...props }): JSX.Element => (
    <Link className={classes.link} to={ props.to } >
        <Button className={classes.button} variant="contained">{ props.inscription }</Button>
    </Link>
);
export default Segue;