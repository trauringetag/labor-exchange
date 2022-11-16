import classes from './SliderElement.module.scss';
import { NavLink } from "react-router-dom";
import Button from "@mui/material/Button";
import Handshake from '../../../../assets/SurfaceSliderIcons/handshake.svg';
import Judge from '../../../../assets/SurfaceSliderIcons/judge.svg';
import City from '../../../../assets/SurfaceSliderIcons/city.svg';
import Checkbox from '../../../../assets/SurfaceSliderIcons/checkbox.svg';

const IconSelection = icon => {
    switch (icon) {
        case 'handshake':
            return Handshake;
        case 'checkbox':
            return Checkbox;
        case 'judge':
            return Judge;
        case 'city':
            return City;
        default:
            return 'https://placehold.co/400';
    }
};

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
        <img className={classes.image} src={ IconSelection(props.image) } alt={'Фотография'} />
    </article>
);
export default SliderElement;