import classes from './SurfaceSlider.module.scss';
import { NavLink } from "react-router-dom";
import Button from "@mui/material/Button";
import Slider from "react-slick";

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 5000,
    pauseOnHover: true
};

const SurfaceSlider = () => (
    <Slider className={classes.slider} {...settings}>
        <article className={classes.item} key={'slide1'}>
            <div className={classes.content}>
                <h2 className={classes.title}>Lorem ipsum.</h2>
                <p className={classes.text}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut culpa cupiditate deserunt doloremque expedita nesciunt, quod reiciendis. Accusantium, aperiam delectus eligendi expedita in odit quod.</p>
                <nav>
                    <NavLink to={'/'} className={classes.link}>
                        <Button className={classes.button} variant="contained">Главная</Button>
                    </NavLink>
                </nav>
            </div>
            <img className={classes.image} src={'https://placehold.co/1000'} alt={'Фотография'} />
        </article>
        <article className={classes.item} key={'slide2'}>
            <div className={classes.content}>
                <h2 className={classes.title}>Lorem ipsum.</h2>
                <p className={classes.text}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut culpa cupiditate deserunt doloremque expedita nesciunt, quod reiciendis. Accusantium, aperiam delectus eligendi expedita in odit quod.</p>
                <nav>
                    <NavLink to={'/'} className={classes.link}>
                        <Button className={classes.button} variant="contained">Главная</Button>
                    </NavLink>
                </nav>
            </div>
            <img className={classes.image} src={'https://placehold.co/1000'} alt={'Фотография'} />
        </article>
    </Slider>
);
export default SurfaceSlider;