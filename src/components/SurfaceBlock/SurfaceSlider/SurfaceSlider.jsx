import classes from './SurfaceSlider.module.scss';
import Slider from "react-slick";
import SliderElement from "./SliderElement/SliderElement";

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
    <Slider className={classes.slider} {...settings}></Slider>
);
export default SurfaceSlider;