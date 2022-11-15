import classes from './SliderElement.module.scss';
import { NavLink } from "react-router-dom";
import Button from "@mui/material/Button";
import FirstIcon from "../../../../assets/SurfaceSliderIcons/FirstIcon.svg";

const SliderElement = props => (
    <article className={classes.item} key={ props.id }>
        <div className={classes.content}>
            <h2 className={classes.title}>{ props.title }</h2>
            <p className={classes.text}>{ props.text }</p>
            <nav>
                <NavLink to={ props.link } className={classes.link}>
                    <Button className={classes.button} variant="contained">Перейти</Button>
                </NavLink>
            </nav>
        </div>
        <img className={classes.image} src={ props.imageUrl } alt={'Фотография'} />
    </article>
);
export default SliderElement;